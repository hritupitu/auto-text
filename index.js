import yolo, { downloadModel } from 'tfjs-yolo-tiny';


//This is a YOLOv3 Tiny model
//TODO: Parse img instead of webcam.cap()
async function genText(img, id=''){
    const model = await downloadModel();
    const inputImage = img;
    const boxes = await yolo(inputImage,model,{classProbThreshold: 0.8})
    inputImage.dispose();
    var classes=[];
    final = "This picture may contain ";
    boxes.forEach(box => {
        const {
          top, left, bottom, right, classProb, className,
        } = box;
        classes.push(className);
    });
    final+=classes.toString(); //[Dog, Remote, Person]
    $('#'+id+' img').attr('alt',final);
  }
export default genText;