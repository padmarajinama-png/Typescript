export function collectSupportData(id, resolved) {
    const supportData = [];
    supportData.push("Support session started");
    supportData.push(id);
    supportData.push(resolved);
    return supportData;
}
console.log(collectSupportData(101, true));
