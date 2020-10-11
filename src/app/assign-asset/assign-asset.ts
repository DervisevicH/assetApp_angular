export class AssignAsset {
public constructor(
                   private assetId: number,
                   private employeeId: number,
                   private dateFrom: Date,
                   private dateTo: Date,
                   private administratorId: number,
                   public comment: string = '',                   
                   private assignAssetId?: number,
                   ) {}
}
