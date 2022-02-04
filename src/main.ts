import { Account } from "@tago-io/sdk";

async function main() {
    const acc = new Account({
        token: process.env.TOKEN ?? null,
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
