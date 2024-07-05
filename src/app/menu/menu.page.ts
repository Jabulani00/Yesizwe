import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


interface BusTicket {
  id: number;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
  date: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  currentSegment = 'tickets';
  selectedDate: string = new Date().toISOString();
  formattedDate: string = '';
  showDatePicker: boolean = false;
  busTickets: BusTicket[] = [
    {
      id: 1,
      departure: 'Durban',
      arrival: 'Johannesburg',
      departureTime: '08:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-16',
    },
    {
      id: 1,
      departure: 'Johannesburg',
      arrival: 'Durban',
      departureTime: '07:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Durban',
      arrival: 'Johannesburg',
      departureTime: '12:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Johannesburg',
      arrival: 'Durban',
      departureTime: '09:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Durban',
      arrival: 'Johannesburg',
      departureTime: '08:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Johannesburg',
      arrival: 'Durban',
      departureTime: '10:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Durban',
      arrival: 'Johannesburg',
      departureTime: '08:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-05',
    },
    {
      id: 1,
      departure: 'Johannesburg',
      arrival: 'Durban',
      departureTime: '08:00',
      arrivalTime: '16:00',
      duration: '8h 00m',
      price: 350,
      availableSeats: 25,
      date: '2024-07-16',
    },
  ];
  hireForm = {
    name: '',
    email: '',
    eventDate: new Date().toISOString(),
    passengers: null,
    requirements: ''
  };
  filteredTickets: BusTicket[] = [];
  toastController: any;
  constructor(private navCtrl: NavController) { }

 




  ngOnInit() {
    this.updateFormattedDate();
    this.filterTickets();
  }

  segmentChanged(ev: any) {
    this.currentSegment = ev.detail.value;
  }

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }

  dateChanged(event: any) {
    this.selectedDate = event.detail.value;
    this.updateFormattedDate();
    this.filterTickets();
    this.toggleDatePicker();
  }

  updateFormattedDate() {
    const date = new Date(this.selectedDate);
    this.formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  filterTickets() {
    const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
    this.filteredTickets = this.busTickets.filter(ticket => ticket.date === selectedDate);
  }

  bookTicket(ticket: BusTicket) {
    this.navCtrl.navigateForward('/checkout', {
      state: { ticket: ticket }
    });
  }

  async showTooltip(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  submitHireForm() {
    console.log('Hire form submitted:', this.hireForm);
    // Implement your form submission logic here
  }
  
}