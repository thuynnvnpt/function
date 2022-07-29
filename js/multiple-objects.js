function Hotel(name,rooms,booked){
    this.name = name;
    this.rooms= rooms;
    this.booked = booked;
    this.checAvailability = function (){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay',40,25);
var parkHotel = new Hotel('Park',120,77);

var details1 = quayHotel.name + 'room ';
    details1 += quayHotel.checAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;
var details2 = parkHotel.name + 'rooms';
    details2 += parkHotel.checAvailability();
var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = details2;
