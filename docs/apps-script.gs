/**
 * RSVP backend for dna-wedding.vercel.app
 *
 * Lives in the Google Apps Script project bound to the RSVP Google Sheet. This file is the source of
 * truth: edit here, then paste into the Apps Script editor and redeploy (see "Deploying" below).
 *
 * The page POSTs a JSON body sent as text/plain (so the browser makes no CORS preflight) and reads
 * this script's JSON reply. It only shows "You're locked in" when the reply is { ok: true }, so a
 * failed save surfaces to the guest instead of being silently lost.
 *
 * Deploying (keeps the same /exec URL the site already uses):
 *   Deploy > Manage deployments > select the existing web app > Edit (pencil) >
 *   Version: "New version" > Deploy.
 *   Settings must stay: Execute as "Me", Who has access "Anyone".
 */

var SHEET_NAME = 'RSVPs';  // tab the rows go to; created with headers if it does not exist
var COLUMNS = ['Received', 'Attending', 'Name', 'Phone', 'Email', 'Plus one', 'Accommodation', 'Client time'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);  // two guests submitting at once must not overwrite each other's row
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    var name = String(data.name || '').trim();
    var phone = String(data.phone || '').trim();
    if (!name || !phone) return reply_({ ok: false, error: 'Name and phone are required.' });

    var sheet = sheet_();
    sheet.appendRow([
      new Date(),
      clean_(data.attending || 'yes'),
      clean_(name),
      clean_(phone),
      clean_(data.email),
      clean_(data.plusOne),
      clean_(data.accommodation),
      clean_(data.timestamp)
    ]);
    SpreadsheetApp.flush();  // make sure the row is committed before we say it is
    return reply_({ ok: true, row: sheet.getLastRow() });
  } catch (err) {
    return reply_({ ok: false, error: String(err && err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

// A quick check in the browser: opening the /exec URL should show {"ok":true,"service":"rsvp"}
function doGet() {
  return reply_({ ok: true, service: 'rsvp' });
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(COLUMNS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Stops a guest's text from being run as a spreadsheet formula (e.g. a name starting with "=")
function clean_(v) {
  var s = v == null ? '' : String(v).trim().slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
