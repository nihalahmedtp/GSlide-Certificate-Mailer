# Certificate Generator

This script automates the creation of personalized certificates using a Google Slide template and data from a Google Spreadsheet. It generates individual certificates, saves them as PDFs, and emails them to recipients.

## Setup

1. **Google Drive Setup**:
   - Create a dedicated folder in Google Drive to organize the Slide template and Spreadsheet.
   - Obtain the IDs for the folder, Slide template, and Spreadsheet.
  
2. **Google Apps Script**:
   - Copy the provided script into a Google Apps Script project.
   - Replace placeholder IDs in the script with your actual Drive and Spreadsheet IDs.

3. **Configuration**:
   - Ensure the Spreadsheet contains a column with recipient names and another with their corresponding emails.
   - Customize the email subject and body as needed in the script.

## Usage

1. **Prepare Data**:
   - Populate the Google Spreadsheet with recipient names and their associated email addresses.

2. **Run Script**:
   - Execute the `generateCertificates()` function in the Apps Script interface.

3. **Generated Certificates**:
   - Certificates will be saved as PDFs in the specified destination folder in Google Drive.
   - Recipients will receive an email with their certificate attached.

## Additional Details

- **Spreadsheet Structure**:
  - The script assumes that the first sheet of the Spreadsheet contains the recipient data and the first row contains headers (e.g., "Name", "Email").

- **Slide Template**:
  - The script replaces placeholders in the Slide template (e.g., "{{name}}") with recipient names.

- **Permissions**:
  - Grant necessary permissions for Google Drive and Gmail services to allow the script to access and modify files and send emails.

- **Error Handling**:
  - The script might need modifications for robust error handling based on specific use cases or exceptional situations.

- **Disclaimer**:
  - This script is provided as-is without any warranty. Review and use it responsibly.

## Contributing

Contributions, improvements, and feature requests are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- This script was inspired by [mention any inspirations or resources if applicable].
