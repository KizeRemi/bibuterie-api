const merge = require('lodash/merge');
const dogSheetResolver = require('./dogSheet');
const dogBreedResolver = require('./dogBreed');
const dogFarmResolver = require('./dogFarm');
const dogClassifiedResolver = require('./dogClassified');
const dogClassifiedLikeResolver = require('./dogClassifiedLike');

module.exports = merge(dogSheetResolver, dogBreedResolver, dogFarmResolver, dogClassifiedResolver, dogClassifiedLikeResolver);