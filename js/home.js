import { Features } from './components/features/Features.js';
import { featuresData } from './data/featuresData.js';
import { Carousel } from './components/carousel/Carousel.js';
import { Interface } from './components/interface/Interface.js';
import { interfaceData } from './data/interfaceData.js';
import { Testimonials } from './components/testimonials/Testimonials.js';
import { testimonialsData } from './data/testimonialsData.js';

new Features('#features_block', featuresData);
new Carousel('#interface_block', Interface, interfaceData);
// new Carousel('#testimonials_block', Testimonials, testimonialsData);
