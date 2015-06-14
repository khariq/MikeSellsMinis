var mongoose = require('mongoose');

var OffersSchema = new mongoose.Schema({
	title: String,
	description: String,
	numberInLot: { type: Number, default: 1},
	msrp: {type: Number, default: 1.00},
	askingPrice: {type: Number, default: 1},
	reservedBy : {
		name: String,
		email: String
	},
	images: [],
	tags: []
});

OffersSchema.methods.reserve = function(cb) {
	
	this.reservedBy.name = "";
	this.reservedBy.email = "";
	this.numberInLot--;

	this.save(cb);
}
OffersSchema.methods.releaseReservation = function(cb) {

	this.reservedBy.name = "";
	this.reservedBy.email = "";
	this.numberInLot++;

	this.save(cb);

}


mongoose.model('Offers', OffersSchema);
