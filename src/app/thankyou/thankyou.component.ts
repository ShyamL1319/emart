import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private title:Title, private meta:Meta) { 
      // Sets the <title></title>
      title.setTitle('E-Mart: Thank You');

     // Sets the <meta> tag for the page
     meta.addTags([
       { name: 'author', content: 'E-Mart' },
       { name: 'description', content: 'E-Mart:  thank you for shopping with us.' },
     ]);

  }

  ngOnInit() {
    window.scroll(0,0);
  }

}
