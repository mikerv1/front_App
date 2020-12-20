import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import StickyFooter from "./StickyFooter";
import { ResponsiveLine } from "@nivo/line";
import { data } from "../context/context";
import Container from "@material-ui/core/Container";

// const backgroundShape = require("../images/shape.svg");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // marginTop: theme.spacing(1),
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  chartbox: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    // alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: 380,
  },

  // root: {
  //   display: "flex",
  //   // flexGrow: 1,
  //   flexDirection: "column",
  //   minHeight: "100vh",
  //   backgroundColor: theme.palette.grey[50],
  //   overflow: "hidden",
  //   backgroundSize: "cover",
  //   backgroundPosition: "0 400px"
  // },
  // siteContent: {
  //   flex: 1
  // },
  // grid: {
  //   width: 1200,
  //   // height: 600,
  //   marginTop: 40,
  //   [theme.breakpoints.down("sm")]: {
  //     width: "calc(100% - 20px)"
  //   }
  // },
  // paper: {
  //   padding: theme.spacing(3),
  //   textAlign: "left",
  //   color: theme.palette.text.secondary
  // },
  // rangeLabel: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   paddingTop: theme.spacing(2)
  // },
  // topBar: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: 32
  // },
  // outlinedButtom: {
  //   textTransform: "uppercase",
  //   margin: theme.spacing(1)
  // },
  // actionButtom: {
  //   textTransform: "uppercase",
  //   margin: theme.spacing(1),
  //   width: 152
  // },
  // blockCenter: {
  //   padding: theme.spacing(2),
  //   textAlign: "center"
  // },
  // block: {
  //   padding: theme.spacing(2)
  // },
  // box: {
  //   marginBottom: 40,
  //   height: 65
  // },
  // inlining: {
  //   display: "inline-block",
  //   marginRight: 10
  // },
  // buttonBar: {
  //   display: "flex"
  // },
  // alignRight: {
  //   display: "flex",
  //   justifyContent: "flex-end"
  // },
  // noBorder: {
  //   borderBottomStyle: "hidden"
  // },
  // loadingState: {
  //   opacity: 0.05
  // },
  // loadingMessage: {
  //   position: "absolute",
  //   top: "40%",
  //   left: "40%"
  // },
  // chart: {
  //   display: "flex",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   height: "50vh",
  //   // width: "60vw",
  //   // background: "white",
  //   // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  //   // transition: "0.3s"
  //  },
  //  chartbox: {
  //   width: "50vh",
  //   height: "60vw"

  //  }
}));

export default function Charts() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <Header />

        {/* <div className={classes.paper}> */}
          <div className={classes.chartbox}>
            <ResponsiveLine
              data={data}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
          <StickyFooter />
        {/* </div> */}
      </div>
    </>
  );
}
