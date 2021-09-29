import React from 'react';
import HeroLayoutsTypeFourth from "../../layouts/HeroLayouts/HeroLayoutsTypeFourth/HeroLayoutsTypeFourth";
import FootersLayoutsTypeFifth from "../../layouts/FootersLayouts/FootersLayoutsTypeFifth/FootersLayoutsTypeFifth";
import CTALayoutsTypeTenth from "../../layouts/CTALayouts/CTALayoutsTypeTenth/CTALayoutsTypeTenth";
import TestimonialsLayoutsTypeThird
    from "../../layouts/TestimonialsLayouts/TestimonialsLayoutsTypeThird/TestimonialsLayoutsTypeThird";
import FeaturesLayoutsTypeEighth
    from "../../layouts/FeaturesLayouts/FeaturesLayoutsTypeEighth/FeaturesLayoutsTypeEighth";
import PricingLayoutsTypeThird from "../../layouts/PricingLayouts/PricingLayoutsTypeThird/PricingLayoutsTypeThird";
import StatsLayoutsTypeThird from "../../layouts/Stats/StatsLayoutsTypeThird/StatsLayoutsTypeThird";
import FeaturesLayoutsTypeSeventh
    from "../../layouts/FeaturesLayouts/FeaturesLayoutsTypeSeventh/FeaturesLayoutsTypeSeventh";


const  Landing01 = (props) => {
    return (
        <div>
            <HeroLayoutsTypeFourth/>
            <FeaturesLayoutsTypeSeventh/>
            <FeaturesLayoutsTypeEighth />
            <StatsLayoutsTypeThird />
            <PricingLayoutsTypeThird />
            <TestimonialsLayoutsTypeThird />
            <CTALayoutsTypeTenth />
            <FootersLayoutsTypeFifth/>
        </div>
    )
}

export default Landing01;
