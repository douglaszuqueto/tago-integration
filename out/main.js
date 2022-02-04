"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@tago-io/sdk");
async function main() {
    var _a;
    const acc = new sdk_1.Account({
        token: (_a = process.env.TOKEN) !== null && _a !== void 0 ? _a : null,
    });
    const payload = {
        name: "teste",
        active: false,
        targets: [["run_user", "tag.key", "farm_id", "tag.value", "4"]],
        permissions: [
            {
                effect: "allow",
                action: ["access"],
                resource: ["dashboard", "tag.key", "farm_id", "tag.value", "4"],
            },
        ],
    };
    // @ts-ignore
    const result = await acc.accessManagement.create(payload);
    console.log(result);
}
main();
