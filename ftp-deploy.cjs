require("dotenv").config();
const ftp = require("basic-ftp");

async function main() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USERNAME,
      password: process.env.FTP_PASSWORD,
      port: Number(process.env.FTP_PORT),
    });
    await client.ensureDir(process.env.FTP_UPLOAD_DIR);
    await client.cd(process.env.FTP_UPLOAD_DIR);
    await client.clearWorkingDir(); // Clean the contents before upload
    await client.uploadFromDir(process.env.FTP_LOCAL_DIR, process.env.FTP_UPLOAD_DIR, {
      overwrite: true
    });
  } catch (err) {
    console.error(err);
  }
  client.close();
}

main();