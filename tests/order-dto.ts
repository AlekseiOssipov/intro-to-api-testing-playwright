export class OrderDto {
  customerName: string;
  status: string;
  courierId: number;
  customerPhone: string;
  comment: string;
  id: number;

  private constructor(customerName: string, status: string, courierId: number, customerPhone: string, comment: string, id: number) {
    this.customerName = customerName;
    this.status = status;
    this.courierId = courierId;
    this.customerPhone = customerPhone;
    this.comment = comment;
    this.id = id;
  }

  static createOrderWithRandomData(): OrderDto {
    return new OrderDto(
      'Aleksei',
      'open',
      Math.floor(Math.random()*100),
      '5474745',
     'free',
      Math.floor(Math.random()*100),
    )
  }
}