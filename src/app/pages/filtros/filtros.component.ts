import { Component } from '@angular/core';

interface Order {
  ID: number;
  OrderNumber: number;
  OrderDate: string;
  DeliveryDate: string;
  SaleAmount: number;
  Terms: string;
  CustomerStoreCity: string;
  Employee: string;
}

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.scss'
})
export class FiltrosComponent {
  orders: Order[] = [
    { ID: 88, OrderNumber: 198746, OrderDate: '2017/05/09', DeliveryDate: '2017/05/12 15:45', SaleAmount: 15700, Terms: '30 Days', CustomerStoreCity: 'Denver, CO', Employee: 'Todd Hoffman' },
    { ID: 89, OrderNumber: 198747, OrderDate: '2017/05/10', DeliveryDate: '2017/05/13 14:30', SaleAmount: 21000, Terms: '15 Days', CustomerStoreCity: 'Austin, TX', Employee: 'Sara Connor' },
    { ID: 90, OrderNumber: 198748, OrderDate: '2017/05/11', DeliveryDate: '2017/05/14 13:15', SaleAmount: 18300, Terms: '30 Days', CustomerStoreCity: 'Seattle, WA', Employee: 'Jane Doe' },
    { ID: 91, OrderNumber: 198749, OrderDate: '2017/05/12', DeliveryDate: '2017/05/15 10:30', SaleAmount: 25900, Terms: '15 Days', CustomerStoreCity: 'San Francisco, CA', Employee: 'John Smith' },
    { ID: 92, OrderNumber: 198750, OrderDate: '2017/05/13', DeliveryDate: '2017/05/16 09:45', SaleAmount: 19500, Terms: '45 Days', CustomerStoreCity: 'New York, NY', Employee: 'Alice Johnson' },
    { ID: 93, OrderNumber: 198751, OrderDate: '2017/05/14', DeliveryDate: '2017/05/17 11:15', SaleAmount: 30500, Terms: '30 Days', CustomerStoreCity: 'Houston, TX', Employee: 'Bob Brown' },
    { ID: 94, OrderNumber: 198752, OrderDate: '2017/05/15', DeliveryDate: '2017/05/18 12:00', SaleAmount: 12000, Terms: '15 Days', CustomerStoreCity: 'Los Angeles, CA', Employee: 'Charlie Green' },
    { ID: 95, OrderNumber: 198753, OrderDate: '2017/05/16', DeliveryDate: '2017/05/19 16:30', SaleAmount: 27600, Terms: '30 Days', CustomerStoreCity: 'Chicago, IL', Employee: 'Denise White' },
    { ID: 96, OrderNumber: 198754, OrderDate: '2017/05/17', DeliveryDate: '2017/05/20 15:20', SaleAmount: 24300, Terms: '60 Days', CustomerStoreCity: 'Phoenix, AZ', Employee: 'Eve Martinez' },
    { ID: 97, OrderNumber: 198755, OrderDate: '2017/05/18', DeliveryDate: '2017/05/21 18:30', SaleAmount: 15800, Terms: '30 Days', CustomerStoreCity: 'Philadelphia, PA', Employee: 'George King' },
    { ID: 98, OrderNumber: 198756, OrderDate: '2017/05/19', DeliveryDate: '2017/05/22 19:45', SaleAmount: 18400, Terms: '15 Days', CustomerStoreCity: 'San Diego, CA', Employee: 'Holly Knight' },
    { ID: 99, OrderNumber: 198757, OrderDate: '2017/05/20', DeliveryDate: '2017/05/23 20:00', SaleAmount: 16400, Terms: '30 Days', CustomerStoreCity: 'Dallas, TX', Employee: 'Ian Clark' },
    { ID: 100, OrderNumber: 198758, OrderDate: '2017/05/21', DeliveryDate: '2017/05/24 17:30', SaleAmount: 19300, Terms: '60 Days', CustomerStoreCity: 'Austin, TX', Employee: 'Judy Young' },
    { ID: 101, OrderNumber: 198759, OrderDate: '2017/05/22', DeliveryDate: '2017/05/25 14:45', SaleAmount: 14200, Terms: '45 Days', CustomerStoreCity: 'Miami, FL', Employee: 'Karl Thompson' },
    { ID: 102, OrderNumber: 198760, OrderDate: '2017/05/23', DeliveryDate: '2017/05/26 09:30', SaleAmount: 22100, Terms: '30 Days', CustomerStoreCity: 'Orlando, FL', Employee: 'Laura Baker' },
    { ID: 103, OrderNumber: 198761, OrderDate: '2017/05/24', DeliveryDate: '2017/05/27 10:20', SaleAmount: 19900, Terms: '15 Days', CustomerStoreCity: 'Portland, OR', Employee: 'Mike Hill' },
    { ID: 104, OrderNumber: 198762, OrderDate: '2017/05/25', DeliveryDate: '2017/05/28 15:00', SaleAmount: 31000, Terms: '30 Days', CustomerStoreCity: 'Las Vegas, NV', Employee: 'Nina Sanchez' },
    { ID: 105, OrderNumber: 198763, OrderDate: '2017/05/26', DeliveryDate: '2017/05/29 12:15', SaleAmount: 14500, Terms: '45 Days', CustomerStoreCity: 'San Jose, CA', Employee: 'Oscar Lane' },
    { ID: 106, OrderNumber: 198764, OrderDate: '2017/05/27', DeliveryDate: '2017/05/30 13:45', SaleAmount: 18000, Terms: '60 Days', CustomerStoreCity: 'Boston, MA', Employee: 'Paula Carter' },
    { ID: 107, OrderNumber: 198765, OrderDate: '2017/05/28', DeliveryDate: '2017/05/31 08:30', SaleAmount: 20400, Terms: '30 Days', CustomerStoreCity: 'San Antonio, TX', Employee: 'Quincy Lewis' },
    { ID: 108, OrderNumber: 198766, OrderDate: '2017/05/29', DeliveryDate: '2017/06/01 11:00', SaleAmount: 19400, Terms: '15 Days', CustomerStoreCity: 'Indianapolis, IN', Employee: 'Rachel Walker' },
    { ID: 109, OrderNumber: 198767, OrderDate: '2017/05/30', DeliveryDate: '2017/06/02 14:15', SaleAmount: 17500, Terms: '30 Days', CustomerStoreCity: 'Columbus, OH', Employee: 'Samuel Hall' },
    { ID: 110, OrderNumber: 198768, OrderDate: '2017/05/31', DeliveryDate: '2017/06/03 15:40', SaleAmount: 16700, Terms: '45 Days', CustomerStoreCity: 'Charlotte, NC', Employee: 'Tina Allen' },
  ];

  filteredOrders: Order[] = [...this.orders]; // Inicializa con todos los datos

  // Variables de filtro para cada campo
  filters = {
    OrderNumber: '',
    CustomerStoreCity: '',
    Employee: '',
  };

  orderNumbers = Array.from(new Set(this.orders.map(order => order.OrderNumber)));

  selectedOrderNumbers: number[] = [];

  onTagBoxValueChanged(event: any) {
    this.selectedOrderNumbers = event.value; // Actualiza los valores seleccionados
    this.applyFilters2(); // Llama al método de filtro para actualizar el grid
  }

  applyFilters2() {
    this.filteredOrders = this.orders.filter(order =>
      this.selectedOrderNumbers.length === 0 || // Si no hay filtro seleccionado, muestra todos
      this.selectedOrderNumbers.includes(order.OrderNumber)
    );
  }

  // Método para aplicar los filtros
  applyFilters() {
    this.filteredOrders = this.orders.filter(order => {
      const matchesOrderNumber = this.filters.OrderNumber ? order.OrderNumber.toString().includes(this.filters.OrderNumber) : true;
      const matchesCity = this.filters.CustomerStoreCity ? order.CustomerStoreCity.toLowerCase().includes(this.filters.CustomerStoreCity.toLowerCase()) : true;
      const matchesEmployee = this.filters.Employee ? order.Employee.toLowerCase().includes(this.filters.Employee.toLowerCase()) : true;
      return matchesOrderNumber && matchesCity && matchesEmployee;
    });
  }
}
