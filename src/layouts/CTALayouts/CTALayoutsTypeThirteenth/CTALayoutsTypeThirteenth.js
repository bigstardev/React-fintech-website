import React from "react";
import Form from "./SimpleForm/SimpleForm";

import classes from "./CTALayoutsTypeThirteenth.module.css"
import { Fade } from "react-awesome-reveal";
const title = "Newsletter";
const description = "Create screens directly in Method or add your images from Sketch or Figma.";

function CTALayoutsTypeThirteenth(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.cta} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
          <div className={classes.customGrid}>
            <div className={classes.left}>
              <div className={classes.inner}>
                <div className={classes.wrapper}>
                  <Fade down triggerOnce={true}>
                    <h1 className={`title ${classes.title}`}>{title}</h1>
                  </Fade>
                  <Fade down delay={50} triggerOnce={true}>
                    <p className={`normal-text ${classes.description}`}>{description}</p>
                  </Fade>
                  <Fade down delay={100} triggerOnce={true}>
                    <Form
                      dark={props.dark ? true : false}
                    />
                  </Fade>
                </div>
              </div>
            </div>
            <div className={classes.right}>

            </div>
          </div>
      </section>
    </React.Fragment>
  )
}
export default CTALayoutsTypeThirteenth