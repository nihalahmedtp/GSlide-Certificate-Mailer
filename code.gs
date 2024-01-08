/**
 * Generates certificates using a Google Slide template and a Google Spreadsheet containing recipient data.
 * It creates personalized certificates, saves them as PDFs, and emails them to recipients.
 */

function generateCertificates() {
  // Replace placeholders with actual IDs
  var folderId = '<current_folder_id>'; // ID of the folder containing the Slide and Spreadsheet
  var slideId = '<slide_id>'; // ID of the Slide template
  var spreadsheetId = '<sheet_id>'; // ID of the Spreadsheet
  var destinationFolderId = '<destination_folder_id>'; // ID of the destination folder for PDF certificates

  // Accessing necessary resources
  var folder = DriveApp.getFolderById(folderId);
  var destinationFolder = DriveApp.getFolderById(destinationFolderId);
  var slide = DriveApp.getFileById(slideId);
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheets()[0]; // Assuming the data is on the first sheet

  // Fetch data from the spreadsheet
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  // Remove header row
  data.shift();

  // Loop through each row of data
  data.forEach(function (row) {
    var name = row[0];
    var email = row[1];

    // Make a copy of the template slide
    var newSlide = slide.makeCopy(name + ' Certificate', destinationFolder);

    // Access the copied slide and replace placeholder with actual name
    var presentation = SlidesApp.openById(newSlide.getId());
    var slides = presentation.getSlides();
    var placeholder = "{{name}}";

    // Iterate through slide shapes to find and replace placeholder text
    slides.forEach(function (slide) {
      var shapes = slide.getShapes();
      shapes.forEach(function (shape) {
        if (shape.getText().asString().includes(placeholder)) {
          var texts = shape.getText();
          var newText = texts.asString().replace(placeholder, name);
          shape.getText().setText(newText);
        }
      });
    });

    // Save changes to the modified slide
    presentation.saveAndClose();
    presentation = SlidesApp.openById(newSlide.getId());

    // Export the modified slide as PDF
    var pdf = DriveApp.getFileById(newSlide.getId()).getAs('application/pdf');
    destinationFolder.createFile(pdf);

    // Email the certificate to the recipient
    MailApp.sendEmail({
      to: email,
      subject: 'Congratulations on Your Outstanding Achievement ',
      body: `Dear ${name},\n\nCongrats on your achievement!\n\nBest regards,\nYour Organization`,
      attachments: [pdf]
    });

    // Log successful email sending
    console.log(`Sent certificate to ${name} (${email})`);
  });
}
