import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  standalone: false
})
export class StoriesComponent  implements OnInit {

  stories = [
    { username: 'Checo_perz', avatar: 'https://reporte32mx.com/wp-content/uploads/2022/07/checo-portada-1068x667.jpg' },
    { username: 'Mr.beast', avatar: 'https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/67103dda41890741bec88714_653c044d7d4f92a177e550b0_Mr.%2520Beast%2520Blog%2520Image.webp' },
    { username: 'Eminem', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/220px-Eminem_2021_Color_Corrected.jpg' },
    { username: 'Emma', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Emma_Myers_%26_Brady_Noon_2023_%28cropped2%29.jpg/220px-Emma_Myers_%26_Brady_Noon_2023_%28cropped2%29.jpg' },
    { username: 'elonmusk', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/220px-Elon_Musk_Royal_Society_crop.jpg' },
    { username: 'badbunny', avatar: 'https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png' },
    { username: 'Kendrick_L', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg/220px-Pulitzer2018-portraits-kendrick-lamar.jpg' },
    { username: 'cristiano', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/220px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg' },
    { username: 'leomessi', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
    { username: 'shakira', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/800px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg' },
  ];

  selectedStory: any = null;

  openStory(story: any) {
    this.selectedStory = story;
    setTimeout(() => {
      const modal = document.querySelector('.story-modal');
      if (modal) modal.classList.add('show');
    }, 10);
  }

  closeStory() {
    const modal = document.querySelector('.story-modal');
    if (modal) {
      modal.classList.remove('show');
    }
    setTimeout(() => {
      this.selectedStory = null;
    }, 300);
  }

  constructor() { }

  ngOnInit() {}

}