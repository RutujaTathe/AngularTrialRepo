import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
function AsynStream(Observer) {
  var t1 = setInterval(() => {
    Observer.next(Math.random() * 10);
  }, 1000);
}
//convert asynchronous stream to observable
var mainstream = Observable.create(AsynStream);

//opeartor use
var firstoperatorstream = mainstream.pipe(map((res) => res * Math.random()));
var secondoperatorstream = firstoperatorstream.pipe(filter((res) => res > 4));

//subscribe to observable using listener
secondoperatorstream.subscribe((res = Listener(res)));

function Listener(res) {
  console.log(res);

  //used to unsubscribe the asynchronus stream
  secondoperatorstream.unsubscibe();
}
