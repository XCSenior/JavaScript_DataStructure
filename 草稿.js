// const fn = function () {
//     console.log('hello');
// }

// console.log('typeof fn :>> ', typeof fn);

const BuildingBaseIds = { // eslint-disable-line
    // 楼栋总数
    BuildingTotalID: 1307317305426,
    // 一般建筑
    generalBuildingsID: 580437842329,
    // 高层建筑
    highRiseBuildingID: 911414602520,
    // 超高层建筑
    superHighRiseBuildingID: 1341904299237,
    // 其他建筑
    otherBuildingsID: 879804352365
}

const mapIds = new Map([
    ["一般建筑（1到8层）", BuildingBaseIds.generalBuildingsID],
    ["高层建筑（9到32层）", BuildingBaseIds.highRiseBuildingID],
    ["超高层建筑（33层以上）", BuildingBaseIds.superHighRiseBuildingID],
    ["其他建筑（楼层未知）", BuildingBaseIds.otherBuildingsID],
])

console.log('mapIds.get(item.index_name) :>> ', mapIds.get("一般建筑（1到8层）"));