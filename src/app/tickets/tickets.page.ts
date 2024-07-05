import { Component, OnInit } from '@angular/core';

interface Ticket {
  id: string;
  from: string;
  to: string;
  date: string;
  status: 'pending' | 'used' | 'cancelled';
  price: number;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {
  tickets: Ticket[] = [
    { id: 'T001', from: 'Durban', to: 'Johannesburg', date: '2023-07-10', status: 'pending', price: 350 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T004', from: 'Cape Town', to: 'Durban', date: '2023-07-15', status: 'pending', price: 450 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T002', from: 'Johannesburg', to: 'Cape Town', date: '2023-06-25', status: 'used', price: 500 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
    { id: 'T003', from: 'Durban', to: 'Pretoria', date: '2023-07-05', status: 'cancelled', price: 300 },
  ];

  activeSegment: string = 'pending';

  constructor() { }

  ngOnInit() { }

  segmentChanged(ev: any) {
    this.activeSegment = ev.detail.value;
  }

  getFilteredTickets() {
    if (this.activeSegment === 'invoices') {
      return this.tickets;
    }
    return this.tickets.filter(ticket => ticket.status === this.activeSegment);
  }
}