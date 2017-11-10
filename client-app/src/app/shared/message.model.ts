export class Message {
  constructor(
    public operation: OperationType,
    public context: string
  ) {}
}

export enum OperationType {
  RoomCreated = 1,
  RoomDeleted = 2,
  SliceGrabbed = 3,
  SliceCancelled = 4,
  OrdersApproved = 5
}