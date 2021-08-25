import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  answer: string = "";
  @Input()questionList: any[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  public numcorrect:number = 0;
  public quest:number = 0; 
  ans1()
  {
    this.answer = "ans1"
    console.log("got here");
    this.checkandupdate(this.answer);
  }
  ans2()
  {
    this.answer = "ans2"
    this.checkandupdate(this.answer);
  }
  ans3()
  {
    this.answer = "ans3"
    this.checkandupdate(this.answer);
  }
  ans4()
  {
    this.answer = "ans4"
    this.checkandupdate(this.answer);
  }
  checkandupdate(ans:string)
  {
    let right:string = this.questionList[this.quest].correct
    if(ans == right)
    {
      this.numcorrect += 1;
      (<HTMLInputElement>document.getElementById("update")).innerHTML = "Correct Answer" +
      "You got " + this.numcorrect + " out of 10 Correct";
    }
    else{
      (<HTMLInputElement>document.getElementById("update")).innerHTML = "Wrong Answer" +
      "You got " + this.numcorrect + " out of 10 Correct";;
    }
    if(this.quest == 9)
    {
      (<HTMLInputElement>document.getElementById("here")).innerHTML = "Test OVER THANKYOU"
    }
    
  }
  next()
  {
    this.quest += 1;
    this.test();
  }

  test() {
    
    let htmlstuff:string = ` 
            <p>Question:` +this.questionList[this.quest].question+ `</p>
            <br>
            <p>A: ` +this.questionList[this.quest].ans1+ `</p>
            <p>B: :` +this.questionList[this.quest].ans2+ `</p>
            <p>C: :` +this.questionList[this.quest].ans3+ `</p>
            <p>D: :` +this.questionList[this.quest].ans4+ `</p>       
    `;

    (<HTMLInputElement>document.getElementById("here")).innerHTML = htmlstuff;
    









  //   let login = testRef.value;
  //   let Name:String = login.name;
  //   Name = Name.toString();

  //   let ID:String = login.id;
  //   ID = ID.toString();

  //   let Task:String = login.id;
  //   Task = Task.toString();

  //   let Deadline:String = login.deadline;
  //   Deadline = Deadline.toString();
  //   //if data is empty then create it
  //   if (localStorage.getItem('data') == null)
  //   {
  //     localStorage.setItem('data', '[]');
  //   }
  //   let old_data = JSON.parse(localStorage.getItem('data') || '{}');
  //   //add on the old data to the string array
  //   old_data.push(ID);
  //   old_data.push(Name);
  //   old_data.push(Task);
  //   old_data.push(Deadline);

  //   localStorage.setItem('data', JSON.stringify(old_data));
}



}
