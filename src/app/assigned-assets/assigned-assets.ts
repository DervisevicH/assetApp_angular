export class AssignedAssets {
public constructor(public assignAssetId: number, public assetId: number,
                   public employeeId: number, public dateFrom: Date, public dateTo: Date,
                   public asset: string, public assetNmb: number, public employee: string) {}
}
