import { Injectable } from '@angular/core';
import { Website } from '../models/website.model.client'
// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

websites = 
[
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];


  createWebsite(userId:string, website: Website) {
    website._id = Math.floor(Math.random()*Math.floor(10000)).toString();  
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  findWebsiteByUser(userId: string) {
    var result = [];
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {  
        result.push(this.websites[x])
        }
    }return result
  }

  findWebsiteById(websiteId: string) {

    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  
        return this.websites[x]; }
    }
  }

  updateWebsite(websiteId:string, website:Website) {
    const oldWebsite =  this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(oldWebsite);
    this.websites[index].name = website.name;
    this.websites[index].description = website.description;


   }
  deleteWebsite(websiteId:string) { 
    const oldWebsite = this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(oldWebsite);
    this.websites.splice(index,1);
   }
}

