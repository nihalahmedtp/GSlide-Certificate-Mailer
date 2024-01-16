# Certificate Generation and Mailer Script

This script automates the generation of personalized certificates using a Google Slide template and a Google Spreadsheet containing recipient data. It creates individualized certificates, saves them as PDFs, and emails them to the respective recipients.

## Prerequisites

Before running the script, ensure you have the following:

- **Google Account:** The script utilizes Google Apps Script and requires access to Google Drive, Google Slides, and Google Sheets.
- **Google Slide Template:** Create a template slide with placeholders (e.g., `{{name}}`) to be replaced with recipient names. Obtain the Slide ID to be used in the script.
- **Google Spreadsheet:** Prepare a spreadsheet containing recipient data, including names and email addresses. Obtain the Spreadsheet ID to be used in the script.

## Usage

1. Clone or download the repository to your local machine.
2. Upload the following to your Google Drive:
   - **Google Slide Template:** Upload your Slide template to Google Drive.
   - **Google Spreadsheet:** Upload your Spreadsheet containing recipient data to Google Drive.
3. Retrieve the necessary IDs:
   - Replace `<slide_id>` with the ID of your Slide template.
   - Replace `<sheet_id>` with the ID of your Spreadsheet.
   - Replace `<destination_folder_id>` with the ID of the folder to save generated PDFs.
4. Open `generateCertificates()` function in the script file and replace the placeholder IDs with your actual IDs.
5. Run the script:
   - Copy the script into Google Apps Script editor.
   - Run the `generateCertificates()` function to execute the certificate generation process.

## Note

- Ensure the Spreadsheet structure matches the script's expectations.
- The first sheet of the Spreadsheet is considered as the data source.
- The script assumes the first row of the sheet contains headers and skips it.


- @nihalahmedtp
