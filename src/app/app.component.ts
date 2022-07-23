import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos = [
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Barbara",
              "last": "Camacho"
          },
          "location": {
              "street": {
                  "number": 9052,
                  "name": "Privada Oquendo"
              },
              "city": "San Marcos (Mpio. San Marcos)",
              "state": "Tamaulipas",
              "country": "Mexico",
              "postcode": 97072,
              "coordinates": {
                  "latitude": "23.2424",
                  "longitude": "101.0960"
              },
              "timezone": {
                  "offset": "+4:00",
                  "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
              }
          },
          "email": "barbara.camacho@example.com",
          "login": {
              "uuid": "2249edbd-f0e8-4d89-81a4-3d96192bb59e",
              "username": "crazyduck847",
              "password": "pamela",
              "salt": "c4FYIJch",
              "md5": "9a0ceb2119731263e1ef68198ba34e1b",
              "sha1": "061fa518413b703f5354a99918a845d99e0ae8c1",
              "sha256": "9e967047b9cd202794dbe7372260b496aca41891eced4fde2330bb43efd70b60"
          },
          "dob": {
              "date": "1978-05-16T22:38:58.223Z",
              "age": 44
          },
          "registered": {
              "date": "2010-06-07T23:30:56.792Z",
              "age": 12
          },
          "phone": "(651) 773 6844",
          "cell": "(618) 098 0862",
          "id": {
              "name": "NSS",
              "value": "10 57 02 8797 1"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/10.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
          },
          "nat": "MX",
          "score": 10
      },
      {
          "gender": "female",
          "name": {
              "title": "Mrs",
              "first": "Isabelle",
              "last": "Hernandez"
          },
          "location": {
              "street": {
                  "number": 8938,
                  "name": "New Road"
              },
              "city": "Manchester",
              "state": "Greater Manchester",
              "country": "United Kingdom",
              "postcode": "V5F 5NW",
              "coordinates": {
                  "latitude": "-9.2942",
                  "longitude": "-23.9696"
              },
              "timezone": {
                  "offset": "+11:00",
                  "description": "Magadan, Solomon Islands, New Caledonia"
              }
          },
          "email": "isabelle.hernandez@example.com",
          "login": {
              "uuid": "1d0fd0ea-3309-4b13-9cec-27a668fe7860",
              "username": "blackleopard985",
              "password": "funky",
              "salt": "VIpEeXEX",
              "md5": "bf007084edacbf6c6de8c36f52641e3d",
              "sha1": "0196515b622d32c549bfbb1ed54dda429bfa79ad",
              "sha256": "2c91d3f93f2cd635727ee6f7050ea6d7d4eca4d0103a1001f40db5f5169dc847"
          },
          "dob": {
              "date": "1993-08-08T05:47:37.985Z",
              "age": 28
          },
          "registered": {
              "date": "2014-09-05T21:30:07.684Z",
              "age": 7
          },
          "phone": "016974 72738",
          "cell": "07331 838744",
          "id": {
              "name": "NINO",
              "value": "PH 04 46 58 G"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/6.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
          },
          "nat": "GB",
          "score": 7
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "محمدامين",
              "last": "سلطانی نژاد"
          },
          "location": {
              "street": {
                  "number": 3925,
                  "name": "شهید عباس افضلی"
              },
              "city": "بابل",
              "state": "فارس",
              "country": "Iran",
              "postcode": 18781,
              "coordinates": {
                  "latitude": "46.4575",
                  "longitude": "17.9583"
              },
              "timezone": {
                  "offset": "+5:45",
                  "description": "Kathmandu"
              }
          },
          "email": "mhmdmyn.sltnynjd@example.com",
          "login": {
              "uuid": "471c7c52-8fd9-415a-9d6e-3bf305c8ab44",
              "username": "bigsnake178",
              "password": "spikey",
              "salt": "OGn1MKz1",
              "md5": "ace345ce603af6c00b45c8f6c7254532",
              "sha1": "5efac97815f6a8570f5be387552054aa66cc217f",
              "sha256": "a6b43d8bf66f34c48e3b78aeb23d83ef4bf19449be9af3c120b53b4a82c3fc70"
          },
          "dob": {
              "date": "1997-01-19T16:36:39.513Z",
              "age": 25
          },
          "registered": {
              "date": "2012-01-17T06:24:11.308Z",
              "age": 10
          },
          "phone": "018-21825735",
          "cell": "0915-681-0984",
          "id": {
              "name": "",
              "value": null
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/98.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
          },
          "nat": "IR",
          "score": 3
      },
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Erin",
              "last": "Lynch"
          },
          "location": {
              "street": {
                  "number": 485,
                  "name": "Cork Street"
              },
              "city": "Passage West",
              "state": "Mayo",
              "country": "Ireland",
              "postcode": 22275,
              "coordinates": {
                  "latitude": "-12.8556",
                  "longitude": "-109.4681"
              },
              "timezone": {
                  "offset": "-9:00",
                  "description": "Alaska"
              }
          },
          "email": "erin.lynch@example.com",
          "login": {
              "uuid": "2febdd4a-d741-4715-964e-67934c8d212c",
              "username": "heavylion972",
              "password": "teddybea",
              "salt": "YG5qOtZ1",
              "md5": "55c758f25909c43938cf22b85d2c0a72",
              "sha1": "ae5e908de5ad82a76537d868b38aba0da53ff5d1",
              "sha256": "f561b489f06f44aa2cf145d4668622a62d1cc5bba7dfcdd401ea2016ff53a05a"
          },
          "dob": {
              "date": "1970-10-25T02:18:21.651Z",
              "age": 51
          },
          "registered": {
              "date": "2020-10-21T09:15:39.379Z",
              "age": 1
          },
          "phone": "021-969-1728",
          "cell": "081-048-3695",
          "id": {
              "name": "PPS",
              "value": "6356239T"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/16.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
          },
          "nat": "IE",
          "score": 5
      },
      {
          "gender": "female",
          "name": {
              "title": "Mrs",
              "first": "Soledad",
              "last": "Ramos"
          },
          "location": {
              "street": {
                  "number": 9776,
                  "name": "Calle Covadonga"
              },
              "city": "Córdoba",
              "state": "Comunidad de Madrid",
              "country": "Spain",
              "postcode": 95424,
              "coordinates": {
                  "latitude": "-61.1150",
                  "longitude": "71.5495"
              },
              "timezone": {
                  "offset": "+4:00",
                  "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
              }
          },
          "email": "soledad.ramos@example.com",
          "login": {
              "uuid": "d8784433-01fa-4cb3-85d7-5ac77a4b4074",
              "username": "crazypanda273",
              "password": "sheba1",
              "salt": "cHlMTi7r",
              "md5": "f9235b907fb8320a18e617ebfb82751a",
              "sha1": "ad78a8e692a1ab8f0afe28ee7ff8e7c8746c7c0a",
              "sha256": "2538e834833f09e2525e1054f6661b030ad42981eb3466a80091375567a5383d"
          },
          "dob": {
              "date": "1957-06-01T06:01:50.104Z",
              "age": 65
          },
          "registered": {
              "date": "2015-01-23T14:47:31.895Z",
              "age": 7
          },
          "phone": "990-283-029",
          "cell": "686-589-409",
          "id": {
              "name": "DNI",
              "value": "51133969-X"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/89.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
          },
          "nat": "ES",
          "score": 2
      },
      {
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Lisete",
              "last": "Novaes"
          },
          "location": {
              "street": {
                  "number": 1620,
                  "name": "Rua São Sebastiao "
              },
              "city": "Blumenau",
              "state": "Mato Grosso",
              "country": "Brazil",
              "postcode": 22113,
              "coordinates": {
                  "latitude": "29.7587",
                  "longitude": "84.1750"
              },
              "timezone": {
                  "offset": "-3:30",
                  "description": "Newfoundland"
              }
          },
          "email": "lisete.novaes@example.com",
          "login": {
              "uuid": "25885626-d87b-4e1b-b774-6b049553c5dc",
              "username": "lazymeercat363",
              "password": "lucky13",
              "salt": "NoZW8fSA",
              "md5": "a3152c4748fb5d458208cbde9adb8aae",
              "sha1": "47404081be7586c42d5efe26aa1fa9c7d3611e7b",
              "sha256": "2ada28a3348a644be29aad33d049e87513e88577ceb8bde1cd7dd4dfaa987bd3"
          },
          "dob": {
              "date": "1957-04-25T13:18:54.177Z",
              "age": 65
          },
          "registered": {
              "date": "2014-04-22T11:48:26.536Z",
              "age": 8
          },
          "phone": "(24) 4234-6558",
          "cell": "(37) 1372-9102",
          "id": {
              "name": "CPF",
              "value": "822.001.949-68"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/9.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
          },
          "nat": "BR",
          "score": 1
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Tony",
              "last": "Rey"
          },
          "location": {
              "street": {
                  "number": 8784,
                  "name": "Boulevard de Balmont"
              },
              "city": "Montpellier",
              "state": "Meurthe-et-Moselle",
              "country": "France",
              "postcode": 44113,
              "coordinates": {
                  "latitude": "-1.5042",
                  "longitude": "-16.7219"
              },
              "timezone": {
                  "offset": "+3:30",
                  "description": "Tehran"
              }
          },
          "email": "tony.rey@example.com",
          "login": {
              "uuid": "7554ae4b-e873-4721-a1ec-0f57cc1ec078",
              "username": "ticklishleopard702",
              "password": "raptor",
              "salt": "dEoXCTw4",
              "md5": "dc2879cef9276425f601dac13c9e7a44",
              "sha1": "b551b697f32892ef5053b88c2064b47038d9206d",
              "sha256": "5cef871df47eff1831c8192c796b3d652df59ff93a0c9709425783e0e08bd88e"
          },
          "dob": {
              "date": "1993-12-27T14:27:06.383Z",
              "age": 28
          },
          "registered": {
              "date": "2018-05-07T09:46:35.049Z",
              "age": 4
          },
          "phone": "01-42-42-05-83",
          "cell": "06-24-99-71-91",
          "id": {
              "name": "INSEE",
              "value": "1931124496586 19"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/30.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
          },
          "nat": "FR",
          "score": 8
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Elio",
              "last": "Marchand"
          },
          "location": {
              "street": {
                  "number": 5558,
                  "name": "Rue Duguesclin"
              },
              "city": "Rouen",
              "state": "Charente-Maritime",
              "country": "France",
              "postcode": 69374,
              "coordinates": {
                  "latitude": "55.7961",
                  "longitude": "25.3264"
              },
              "timezone": {
                  "offset": "-10:00",
                  "description": "Hawaii"
              }
          },
          "email": "elio.marchand@example.com",
          "login": {
              "uuid": "387dea41-6798-4c49-8c5b-67371a83d996",
              "username": "goldenbear433",
              "password": "cyclops",
              "salt": "HKuE40pg",
              "md5": "49de9e731e2198e72dbf4f216efc22ae",
              "sha1": "187f73c933f969dd5cefbdbd36bb5da9dadd28ed",
              "sha256": "a8952291480b87a98daaa8c42db31625595c96170ac97819633bdc6bd384bc82"
          },
          "dob": {
              "date": "1996-02-26T09:53:45.580Z",
              "age": 26
          },
          "registered": {
              "date": "2016-04-07T12:32:24.438Z",
              "age": 6
          },
          "phone": "01-90-91-86-60",
          "cell": "06-25-88-44-03",
          "id": {
              "name": "INSEE",
              "value": "1960198333704 61"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
          },
          "nat": "FR",
          "score": 6
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Eemeli",
              "last": "Pelto"
          },
          "location": {
              "street": {
                  "number": 6275,
                  "name": "Korkeavuorenkatu"
              },
              "city": "Juva",
              "state": "Kainuu",
              "country": "Finland",
              "postcode": 55898,
              "coordinates": {
                  "latitude": "62.8163",
                  "longitude": "123.0955"
              },
              "timezone": {
                  "offset": "+5:00",
                  "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
          },
          "email": "eemeli.pelto@example.com",
          "login": {
              "uuid": "1d1e7f1d-42d4-48b5-839a-d10fd78e5801",
              "username": "tinypanda664",
              "password": "4321",
              "salt": "cGciY5cP",
              "md5": "534fa0f25c27be403d2eeeaeded6b6a2",
              "sha1": "57e8979d807ce80b8af49987250db3d31ed1704a",
              "sha256": "173ac9f14ac24b2fc69d495401c32d31bf0ee5d5cccfbb11c2e940251a2b6573"
          },
          "dob": {
              "date": "1949-12-14T05:56:59.620Z",
              "age": 72
          },
          "registered": {
              "date": "2010-02-11T11:54:35.532Z",
              "age": 12
          },
          "phone": "06-302-015",
          "cell": "046-450-32-55",
          "id": {
              "name": "HETU",
              "value": "NaNNA539undefined"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/96.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
          },
          "nat": "FI",
          "score": 9
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Barry",
              "last": "Jackson"
          },
          "location": {
              "street": {
                  "number": 2956,
                  "name": "North Road"
              },
              "city": "Birmingham",
              "state": "Gwent",
              "country": "United Kingdom",
              "postcode": "DL0 4YH",
              "coordinates": {
                  "latitude": "-81.2852",
                  "longitude": "-140.3236"
              },
              "timezone": {
                  "offset": "-3:30",
                  "description": "Newfoundland"
              }
          },
          "email": "barry.jackson@example.com",
          "login": {
              "uuid": "b92c8e4a-5dde-478f-be22-f9f1c3d06d49",
              "username": "tinywolf837",
              "password": "darlene",
              "salt": "sEzJvu9k",
              "md5": "93aff4e963b76b3149d336aee070d652",
              "sha1": "d0f0073c9d04f98dda1dbd58698f735bae0a0ac0",
              "sha256": "40cdf0b3532f41becf27b7fd08947e5e59d644fa48c252dc68ffa3aff39741e8"
          },
          "dob": {
              "date": "1949-09-11T16:19:26.216Z",
              "age": 72
          },
          "registered": {
              "date": "2016-06-25T14:29:20.835Z",
              "age": 6
          },
          "phone": "013873 04110",
          "cell": "07466 017536",
          "id": {
              "name": "NINO",
              "value": "GK 19 77 60 D"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/46.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
          },
          "nat": "GB",
          "score": 4
      }
    ];
}
