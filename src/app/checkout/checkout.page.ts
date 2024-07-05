import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  ticket: BusTicket;
  cardholderName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.ticket = navigation?.extras?.state?.['ticket'];
  }

  ngOnInit() {
    if (!this.ticket) {
      this.router.navigate(['/menu']);
    }
  }

  formatCardNumber(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += input[i];
    }
    this.cardNumber = formatted;
  }

  async confirmBooking() {
    // Here you would typically send the booking data to a server
    console.log('Booking confirmed for:', this.cardholderName);
    console.log('Ticket details:', this.ticket);
    
    const toast = await this.toastController.create({
      message: 'Booking confirmed! Thank you for choosing Yesizwe Bus Services.',
      duration: 3000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();

    // Navigate back to the menu after a short delay
    setTimeout(() => {
      this.router.navigate(['/menu']);
    }, 3000);
  }
}