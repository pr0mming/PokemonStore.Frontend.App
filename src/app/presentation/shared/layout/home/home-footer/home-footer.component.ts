import { Component } from '@angular/core';
import { SocialMediaItemType } from 'src/app/core/domain/entities/types/social-media-item.type';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent {

  socialMediaList: SocialMediaItemType[] = [];

  constructor() {

    this.socialMediaList = [
      {
        name: 'Facebook',
        urlImage: 'assets/logos/facebook-01.png',
        urlToRedirect: 'https://www.facebook.com/Pokemon'
      },
      {
        name: 'Instagram',
        urlImage: 'assets/logos/instagram-01.png',
        urlToRedirect: 'https://www.instagram.com/Pokemon'
      },
      {
        name: 'Twitter',
        urlImage: 'assets/logos/twitter-01.png',
        urlToRedirect: 'https://www.twitter.com/Pokemon'
      }
    ]

  }

}
