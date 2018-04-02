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
        if(x%400===0)
        {
            {
                console.log('Leap Year');
            }
        }
        else if(x%100===0)
            {
                console.log('Not a Leap Year');
            }
        }
    else
        {
            console.log('Leap Year');
        }
    }
year(2016);

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
