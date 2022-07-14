import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any=[
    {
      "course": "BBA",
      "image": "https://image.shutterstock.com/image-illustration/bba-graduation-bachelor-business-administration-260nw-312491207.jpg"
    },
    {
      "course": "BCA",
      "image": "https://www.iimtindia.net/Blog/wp-content/uploads/2021/07/download-10.jpg"
    },
    {
      "course": "B.Sc Mathematics",
      "image": "https://cdn.shopify.com/s/files/1/0264/3207/7929/products/mpm1d-mathematics-online-course_64896887-0987-4099-b9f8-0d4051dc59e3_1718x.jpg?v=1649864490"
    },
    {
      "course": "BA English",
      "image": "https://www.englishexplorer.com.sg/wp-content/uploads/2017/02/english-course.jpg"
    },
    {
      "course": "PCA",
      "image": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/77/e06750f1fb11e782572b9fa3447a7a/TURQUASE-Square-800x800-02.jpg.jpg?auto=format%2Ccompress&dpr=1"
    },
    {
      "course": "BJMC",
      "image": "https://www.ncertbooks.guru/wp-content/uploads/2022/02/Journalism-Diploma-Course.png"
    },
    {
      "course": "MSW",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACT3aecPdFkeyDO4LilhCU-xZILcb2XIdAQ&usqp=CAU"
    },
    {
      "course": "BSW",
      "image": "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/jobs/wp-content/uploads/sites/2/2021/05/31140902/bsw.png"
    },
    {
      "course": "B.Com Tax",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvyz7xe78HeXTJy49ljcNvsfcIz0CVIb9574_C5W1qxiurqinSsWpV0Y6ldJXWBgKyXY&usqp=CAU"
    },
    {
      "course": "MA Malayalam",
      "image": "https://leverageedu.com/blog/wp-content/uploads/2021/03/MA-Malayalam.png"
    }
  ]

}
