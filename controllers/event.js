import { db } from "../db.js";

//req is the SQL
export const addEvent = (req, res) => {
        const q =
          "";
        //query(req, res(err, data))
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };

export const getEvent = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };

export const deleteEvent = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };

export const setStartEventTime = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
export const setStartEventDate = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
export const setEndEventTime = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };
      
export const setEndEventDate = (req, res) => {
        const q =
          " ";
      
        db.query(q, [], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data[0]);
        });
      };