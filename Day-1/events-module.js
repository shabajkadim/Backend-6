const EventEmitter=require("events")

const event=new EventEmitter()

const handleEventFunction=()=>{
    console.log("hello");
}

const handleByeEventFuntion=()=>{
    console.log("bye");
}

event.on("HelloEvent",handleEventFunction)
event.on("byeEvent",handleByeEventFuntion)


event.emit("HelloEvent")
event.emit("byeEvent")