import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatCardComponent } from './chat-card/chat-card.component';
import { InfiniteScrollTestingComponent } from './infinite-scroll-testing/infinite-scroll-testing.component';
import { IntersectionIndicatorComponent } from './infinite-scroll-testing/intersection-indicator/intersection-indicator.component';
import { LoopAutoplayerComponent } from './loop-autoplayer/loop-autoplayer.component';
import { SlideshowComponent } from './slide-show/slide-show.component';
import { ResumeComponent } from './resume/resume.component';
import { TwoColumnComponent } from './layout/two-column/two-column.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, ChatCardComponent, InfiniteScrollTestingComponent, IntersectionIndicatorComponent, LoopAutoplayerComponent, SlideshowComponen, ResumeComponent, TwoColumnComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
