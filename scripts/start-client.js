const args = ["start"];
const opts = { stdio: "inherit", cwd: "client/my-app/", shell: true };
require("child_process").spawn("npm", args, opts);