//Setting and Swapping
var myNumber=42;
var myName='Taylor';
var temp= myNumber;
myNumber=myName;
myName=temp;

//Print -52 to 1066
for(var num = -52;num <= 1066;num++)
{
    console.log(num);
}

//Don't Worry, Be Happy
function beCheerful()
{
    console.log('good morning!');
}
for(var x=1;x<=98;x++)
{
    console.log(beCheerful);
}

//Multiples of Three- but Not All
for (var x=-300;x<=0;x++)
{
if (x%3===0)
    {
        if (x==-3 || x==-6)
    {   continue;
    }
        console.log(x);
    }
}

//Printing Integers with While
var y=2000;
while (y<5281)
{
    console.log(y);
    y=y+1;
}

//You Say It's Your Birthday
var birthMonth=1;
while(birthMonth<=31)
{
for(var birthDay=1;birthDay<=31;birthDay++)
{
if(birthDay==1)
    {
    if(birthMonth==21)
        {
            console.log('How did you know?');
        }
    else
    {
        console.log('Just another day....');
    }
    }
else if(birthDay==21)
    {
        if(birthMonth==1)
        {
            console.log('How did you know?');
        }
        else
        {
            console.log('Just another day....');
        }
    }
else
    {
        console.log('Just another day....');
    }
}
birthMonth=birthMonth+1;
}

//Leap Year
function year(x)
{
    if (x%4===0)
    {
        if(x%100===0 && x%400==0)
        {
            {
                console.log('Leap Year');
            }
        }
        else if(x%100===0)
            {
                console.log('Not a Leap Year');
            }
        else
        {
            console.log('Leap Year');
        }
        }
    else
        {
            console.log('Not a Leap Year');
        }
    }
year(1900);

//Print and Count
function print()
{
for(x=512;x<=4096;x++)
{
    if (x%5===0)
    {
        console.log(x);
    }
}
}
print();

var count=0;
function print()
{
for(x=512;x<=4096;x++)
{
    if (x%5===0)
    {
        console.log(x);
        count=count+1;
    }
}
}
print();
console.log(count);

//Multiples of Six
var x=0;
while (x<=60000)
{
    if(x%6===0)
    {
        console.log(x);
    }
x=x+1
}

//Counting, the Dojo Way
var x=1;
while(x<101)
{
    if (x%5===0)
    {
        if(x%10===0)
            {
                console.log('Coding Dojo')
            }
        else
        {
            console.log('Coding');
        }
    }
    else
    {
        console.log(x);
    }
x=x+1;
}

//What Do You Know?
function knowledge(incoming)
{
    console.log(incoming);
}
knowledge('some value');

//Whoa, That Sucker's Huge
var sum=0;
for(x=-300000;x<=300000;x++)
{
    if(x%2==1)
    {
        sum=sum+x;
    }
}
console.log(sum);

//Countdown by Fours
var x=2016;
while (x>0)
{
    console.log(x);
    x=x-4;
}

//Flexible Countdown
function flexCount(lowNum,highNum,mult)
{
for(var x=highNum;x>=lowNum;x--)
{
    if(x%mult===0)
    {
        console.log(x);
    }
}
}
flexCount(2,9,3);

//The Final Countdown
function finalCount(param1,param2,param3,param4)
{
var x=param2;
while (x<=param3)
{
    if(x%param1===0 && x!=param4)
    {
        console.log(x);
    }
x=x+1;
}
}
finalCount(3,5,17,9);

//Countdown **NOT RIGHT..?**
function countdown(number)
{
var arr=[];
for(var x=number;x>=0;x--)
{
    arr.push(x);
}
}
countdown(10);
//array should be one more than the number you choose

//Print and Return
function print(a,b)
{
var arr=[a,b];
{
    console.log(a);
    return(b);
}
}
print(1,0);

//First Plus Length
var arr=[1,2,3,4];
var sum=arr[0]+arr.length;
console.log(sum);

var arr=['what?',2,3,4];
var sum=arr[0]+arr.length;
console.log(sum);
//adds the length to the end of the string: what?4

var arr=[true,2,3,4];
var sum=arr[0]+arr.length;
console.log(sum);
//counts true as 1: sum=5

var arr=[false,2,3,4];
var sum=arr[0]+arr.length;
console.log(sum);
//counts false as 0: sum=4

//Values Greater than Second
var arr=[1,3,5,7,9,13];
for(i=0;i<arr.length;i++)
{
    if(arr[i]>arr[1])
    {
        console.log(arr[i]);
    }
}

var arr=[1,3,5,7,9,13];
var count=0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]>arr[1])
    {
        console.log(arr[i]);
        count=count+1;
    }
}
console.log(count);

//Values Greater than Second, Generalized **NOT RIGHT**
function myArray(arrTwo)
{
var arrNew=[];
var arrTwo=[0,1,2,3]
for(i=0;i<arrTwo.length;i++)
{
    if(arrTwo[i]>arrTwo[1])
    {
        arrNew.push(arrTwo[i]);
    }
}
}
console.log(arrNew);
console.log(arrNew.length);

//This Length, That Value

//Fit the First Value

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees)
{
    var celsius=9/5*(fDegrees-32);
    console.log(celsius);
}
fahrenheitToCelsius(16);

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees)
{
    var fahrenheit = (((9/5) * cDegrees)+32);
    console.log(fahrenheit);
}
celsiusToFahrenheit(100);

//pg.22 exercises
//Biggie Size
