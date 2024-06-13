import { Component } from '@angular/core';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent {
  label = 'Інструкція';
  text = [{item: 'Для того, щоб перейти на головну сторінку зі словником треба натиснути на «Словник» на панелі навігації.',
    img: ['assets/img/img1.jpg', 'assets/img/img4.jpg']},
    {item: 'Щоб перейти на словникову статтю, натисніть на слово або одну з його семем.',
      img: ['assets/img/img7.jpg', 'assets/img/img2.jpg']
    },
    {item: 'Щоб знайти ціле слово за підрядком, введіть його в пошуковий рядок.',
      img: ['assets/img/img6.jpg']
    },
    {item: 'Щоб знайти всі слова, що починаються на певну літеру, натисніть на літеру з переліку.',
      img: ['assets/img/img5.jpg']
    },
    {item: 'Щоб знайти всі слова, що входять до лексико-тематичної групи чи підгрупи, оберіть один з елементів розкривного списку.',
      img: ['assets/img/img9.jpg', 'assets/img/img8.jpg', 'assets/img/img3.jpg']
    },
    {item: 'Усі види пошуку можна використовувати одночасно для підвищення точності результатів.',
      img: ['assets/img/img10.jpg']
    }
  ];
}
