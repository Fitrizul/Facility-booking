import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Facility } from './models/facility.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const admins = [
            { 
              id: 1,
              username: 'admin1',
              password: 'adminfirst' 
            },
            { id: 2, 
              username: 'admin2', 
              password: 'adminsecond' 
            }
          ];
      
        const users = [
            { id: 1, username: 'user1', password: 'userpass123' },
            { id: 2, username: 'user2', password: 'userpass456' }
          ];

          const facilities: Facility[] = [
            {
              id: '1',
              name: 'Badminton Court',
              startTime: '09:00',
              endTime: '22:00',
              maxCapacity: '4 players',
              features: 'Air-conditioned, seating for spectators',
              pricePerHour: 30,
              imagePath: 'images/badminton-court.jpg'
            },
            {
                id: '2',
                name: 'Futsal Court',
                startTime: '09:00',
                endTime: '23:00',
                maxCapacity: '10 players',
                features: 'Floodlights, spectator stands, small sized goals',
                pricePerHour: 50,
                imagePath: 'images/futsal-court.jpg'
            },
            {
                id: '3',
                name: 'Volleyball Court',
                startTime: '09:00',
                endTime: '18:00',
                maxCapacity: '12 players',
                features: 'Nets, benches for spectators, open field',
                pricePerHour: 25,
                imagePath: 'images/volleyball-court.jpg'
            },
            {
                id: '4',
                name: 'Squash Court',
                startTime: '09:00',
                endTime: '21:00',
                maxCapacity: '4 players',
                features: 'Glass back wall, seating for spectators, climate control',
                pricePerHour: 20,
                imagePath: 'images/squash-court.jpg'
            },
            {
                id: '5',
                name: 'Tennis Court',
                startTime: '09:00',
                endTime: '20:00',
                maxCapacity: '4 players',
                features: 'Benches for spectators, ball machine rental available',
                pricePerHour: 30,
                imagePath: 'images/tennis-court.jpg'
            },
            {
                id: '6',
                name: 'Basketball Court',
                startTime: '09:00',
                endTime: '22:00',
                maxCapacity: '10 players',
                features: 'Full-sized court, electronic scoreboard',
                pricePerHour: 35,
                imagePath: 'images/basketball-court.jpg'
            },

          ];
        return { admins, users, facilities };
  }

}
