import React from "react"
import style from "./schedule.module.scss"
import TextBlock from "../../components/text-block"
import MiniHeadline from "../../components/mini-headline"
import Row from "./row"

const Schedule = () => (
  <TextBlock headline="Schedule">
    <div className={style.tables}>
      <div className={style.daySchedule}>
        <MiniHeadline>Friday</MiniHeadline>
        <Row time="09:00">Doors open</Row>
        <Row time="10:00-11:00">Opening &amp; Marketplace</Row>
        <Row time="11:00-13:00">Sessions</Row>
        <Row time="13:00-14:00">Lunch - sponsored by Grollmus</Row>
        <Row time="14:00-17:00">Sessions</Row>
        <Row time="17:00-18:00">Review</Row>
        <Row time="18:00-?">Networking</Row>
      </div>
      <div className={style.daySchedule}>
        <MiniHeadline>Saturday</MiniHeadline>
        <Row time="09:00">Doors open</Row>
        <Row time="10:00-11:00">Marketplace</Row>
        <Row time="11:00-13:00">Sessions</Row>
        <Row time="13:00-14:00">Lunch - sponsored by Sono Motors</Row>
        <Row time="14:00-17:00">Sessions</Row>
        <Row time="17:00-18:00">Review &amp; Closing</Row>
      </div>
    </div>
  </TextBlock>
)

export default Schedule
