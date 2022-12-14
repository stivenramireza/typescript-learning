import { Express, Request, Response, NextFunction } from 'express';

import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = (app: Express): void => {
  app
    .route('/contacts')
    .get((req: Request, res: Response, next: NextFunction): void => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // POST endpoint
    .post(addNewContact);

  app
    .route('/contacts/:contactId')
    // get specific contact
    .get(getContactWithID)
    // put request
    .put(updateContact)
    // delete request
    .delete(deleteContact);
};

export default routes;
