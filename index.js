
    // function sayHi() {
    //     console.log("Hello!");
    //   }
    //   const intervalId = setInterval(sayHi, 2000); // Call sayHi every 2 seconds
    setInterval(() => {
        d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
// hour is likely a variable referencing a DOM element representing the hour hand of a clock or similar visualization.
// style is a property that accesses the CSS styles associated with that element.
// transform is a specific CSS property that applies various transformations to an element, including rotation.
// 'rotate(${hrotation}deg)':

// This is the value being assigned to the transform property.
// rotate() is a CSS function that defines a rotation transformation for the element.
// (${hrotation}) is a placeholder where the actual rotation angle in degrees will be inserted.
// deg is the unit specifying that the rotation angle is in degrees.