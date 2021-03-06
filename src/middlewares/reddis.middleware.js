import HttpStatus from 'http-status-codes';

import {
  client
} from '../config/reddis';
export const reddis_archived_data = async (req, res, next) => {
  const getdata = await client.get("archive_data");
  
  if (getdata == null) {
    
    next();

  } else {
    res.status(HttpStatus.OK).send({
      code: HttpStatus.OK,
      data: (JSON.parse(getdata)),
      messege: "Reddis data fetch"
    })
  }
}


export const reddis_notes_data = async (req, res, next) => {
  const getdata = await client.get("notes_data");

  if (getdata == null) {
    
    next();

  } else {
    res.status(HttpStatus.OK).send({
      code: HttpStatus.OK,
      data: (JSON.parse(getdata)),
      messege: "Reddis notes data fetch"
    })
  }



}






export const reddis_trash_data = async (req, res, next) => {
  const getdata = await client.get("trash_data");

  if (getdata == null) {
    
    next();

  } else {
    res.status(HttpStatus.OK).send({
      code: HttpStatus.OK,
      data: (JSON.parse(getdata)),
      messege: "Reddis notes data fetch"
    })
  }



}