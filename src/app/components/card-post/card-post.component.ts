import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false
})
export class CardPostComponent implements OnInit {

  users = [
    {
      username: "ChecoPerez", location: "México", avatar: "https://reporte32mx.com/wp-content/uploads/2022/07/checo-portada-1068x667.jpg",
      image: "https://assets.grada.mx/lyv6qk3gdq4yggy4b77dlwfc8z0j",
      likes: 1200,  liked: false,caption: "Gran carrera hoy! 🏎️", time: "Hace 2 horas"
    },

    {
      username: "MrBeast", location: "USA", avatar: "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/67103dda41890741bec88714_653c044d7d4f92a177e550b0_Mr.%2520Beast%2520Blog%2520Image.webp",
      image: "https://www.rollingstone.com/wp-content/uploads/2022/04/R1363_MrBeast_1feature.jpg?w=1600&h=900&crop=1",
      likes: 5000,  liked: false,caption: "Regalando dinero otra vez! 💰", time: "Hace 3 horas"
    },

    {
      username: "Abiel", location: "Orizaba", avatar: "assets/abiel.jpg",
      image: "assets/nay.jpg",
      likes: 300,  liked: false,caption: "Love Love Love", time: "Hace 5 horas"
    },

    {
      username: "Nallely", location: "Orizaba", avatar: "assets/abiel.jpg",
      image: "assets/abiel.jpg",
      likes: 450,  liked: false,caption: "Lindo dia", time: "Hace 1 hora"
    },

    {
      username: "Jaime", location: "Bahamas", avatar: "jaime.jpg",
      image: "https://picsum.photos/id/149/500/300",
      likes: 250,  liked: false,caption: "Viaje increíble ✈️", time: "Hace 4 horas"
    },

    {
      username: "Samantha", location: "Colombia", avatar: "samantha.jpg",
      image: "https://picsum.photos/id/179/500/300",
      likes: 600,  liked: false,caption: "Día perfecto en la playa 🏖️", time: "Hace 6 horas"
    },

    {
      username: "Fernando", location: "Brasil", avatar: "fernando.jpg",
      image: "https://picsum.photos/id/180/500/300",
      likes: 900,  liked: false,caption: "De vuelta al trabajo! 💼", time: "Hace 7 horas"
    },

    {
      username: "Carla", location: "Perú", avatar: "carla.jpg",
      image: "https://picsum.photos/id/292/500/300",
      likes: 150,  liked: false,caption: "Cocinando de nuevo🥘", time: "Hace 8 horas"
    },

    {
      username: "Luis", location: "Ecuador", avatar: "luis.jpg",
      image: "https://picsum.photos/id/364/500/300",
      likes: 850,  liked: false,caption: "Nuevo proyecto en marcha 🚀", time: "Hace 9 horas"
    },

    {
      username: "Mariana", location: "Venezuela", avatar: "mariana.jpg",
      image: "https://picsum.photos/id/443/500/300",
      likes: 750,  liked: false,caption: "Lista para la aventura! ⛰️", time: "Hace 10 horas"
    }
  ];

  likePost(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }



  constructor() { }

  ngOnInit() { }

}
