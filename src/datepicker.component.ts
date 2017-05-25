import {
    animate, Component, ElementRef, EventEmitter, Input, keyframes, OnChanges,
    OnInit, Output, Renderer, SimpleChange, state, style, transition, trigger
} from '@angular/core';

import {Calendar} from './calendar';


@Component({
    selector: 'datepicker-range',
    animations: [
        trigger('calendarAnimation', [
            transition('* => left', [
                animate(180, keyframes([
                    style({transform: 'translateX(105%)', offset: 0.5}),
                    style({transform: 'translateX(-130%)', offset: 0.51}),
                    style({transform: 'translateX(0)', offset: 1})
                ]))
            ]),
            transition('* => right', [
                animate(180, keyframes([
                    style({transform: 'translateX(-105%)', offset: 0.5}),
                    style({transform: 'translateX(130%)', offset: 0.51}),
                    style({transform: 'translateX(0)', offset: 1})
                ]))
            ])
        ])
    ],
    styles: [
        `.datepicker {
        position: relative;
        display: inline-block;
        color: #2b2b2b;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'Calibri', 'Roboto';
      }

      .datepicker__calendar {
        position: absolute;
        overflow: hidden;
        z-index: 1000;
        top: 38px;
        left: -8px;
        width: 20.5em;
        font-size: 14px;
        border-radius: 3px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(191,200,214,0.22), 0 2px 3px 0 rgba(191,200,214,0.13);
        cursor: default;
        -webkit-touch-callout: none;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
                  
      }
      .is_right {
          left: -8px;  
      }
      .active-input {
        background-color: #4488ff !important;
        color: white !important;
      }

      .datepicker__calendar__cancel {
        position: absolute;
        bottom: 1em;
        left: 1.8em;
        color: #d8d8d8;
        cursor: pointer;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__cancel:hover {
        color: #b1b1b1;
      }

      .datepicker__calendar__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: wrap;
            flex-flow: wrap;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
        margin-top: 0.2em;
      }

      .datepicker__calendar__label {
        display: inline-block;
        width: 2.2em;
        height: 2.2em;
        margin: 0.2em;
        line-height: 2.2em;
        text-align: center;
        color: #d8d8d8;
      }

      .datepicker__calendar__month {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: wrap;
            flex-flow: wrap;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
      }

      .datepicker__calendar__month__day {
        display: inline-block;
        width: 2.2em;
        height: 2.2em;
        margin: 0.2em;
        line-height: 2.2em;
        text-align: center;
        -webkit-transition: 0.37s;
        transition: 0.37s;
        border-radius: 3px;
      }

      .datepicker__calendar__nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
        -webkit-box-align: center;
           -ms-flex-align: center;
              align-items: center;
        height: 3em;
        background-color: #fff;
        border-bottom: 1px solid #e8e8e8;
      }

      .datepicker__calendar__nav__arrow {
        width: 0.8em;
        /*height: 0.8em;*/
        cursor: pointer;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__nav__arrow:hover {
        -webkit-transform: scale(1.05);
                transform: scale(1.05);
      }

      .datepicker__calendar__nav__chevron {
        fill: #bbbbbb;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__nav__chevron:hover {
        fill: #2b2b2b;
      }

      .datepicker__calendar__nav__header {
        width: 11em;
        margin: 0 1em;
        text-align: center;
      }

      .datepicker__input {
        outline: none;
        border-radius: 3px;
        font-size: 14px;
        display: inline-block;
        width: 96px;
        border: none !important;
        color: #4488FF;
        padding: .2em .6em;
        cursor: pointer;
      }
    `
    ],
    template: `
    <div
      class="datepicker"
      [ngStyle]="{'font-family': fontFamily}"
    >
      <input
        [disabled]="disabled"
        class="datepicker__input"
        [placeholder]="placeholder"
        [ngStyle]="{'color': altInputStyle ? colors['white'] : colors['black'],
                    'background-color': altInputStyle ? accentColor : colors['white'],
                    'border': altInputStyle ? '' : '1px solid #dadada'}"
        (click)="onInputLeftClick()"
        [(ngModel)]="inputText"
        readonly="true"
        [ngClass]="{'active-input': showCalendarLeft}"
      >
      <span> 
        <svg width="13px" height="11px" viewBox="2516 -1920 13 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="资源-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(2516.000000, -1920.000000)">
                <g id="图层_2" fill-rule="nonzero" fill="#CCDFFF">
                    <g>
                        <g id="图层_1-2">
                            <path d="M12.5,4.4 L8.9,0.34 C8.53273064,-0.0742135427 7.89921357,-0.112269329 7.48500002,0.255000022 C7.07078647,0.622269373 7.03273066,1.25578644 7.4,1.67 L9.59,4.12 L1,4.12 C0.44771525,4.12 6.76353751e-17,4.56771525 0,5.12 C-6.76353751e-17,5.67228475 0.44771525,6.12 1,6.12 L9.48,6.12 L7.41,8.46 C7.13131847,8.71901878 7.02376321,9.11373982 7.13252119,9.47832976 C7.24127918,9.8429197 7.54750663,10.1142084 7.92254881,10.17822 C8.297591,10.2422316 8.67646685,10.0878751 8.9,9.78 L12.5,5.72 C12.8316459,5.34249374 12.8316459,4.77750626 12.5,4.4 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
       </span>
       <input
        [disabled]="disabled"
        class="datepicker__input"
        [placeholder]="placeholder"
        [ngStyle]="{'color': altInputStyle ? colors['white'] : colors['black'],
                    'background-color': altInputStyle ? accentColor : colors['white'],
                    'border': altInputStyle ? '' : '1px solid #dadada'}"
        (click)="onInputRightClick()"
        [(ngModel)]="inputTexts"
        readonly="true"
        [ngClass]="{'active-input': showCalendarRight}"
      >
      <div
        class="datepicker__calendar is_left"
        *ngIf="showCalendarLeft">
        <div class="datepicker__calendar__nav">
          <div
            class="datepicker__calendar__nav__arrow"
            (click)="onArrowLeftClick()"
          >
          <svg class="datepicker__calendar__nav__chevron" x="0px" y="0px" viewBox="0 0 50 50">
            <g>
                <path d="M39.7,7.1c0.5,0.5,0.5,1.2,0,1.7L29,19.6c-0.5,0.5-1.2,1.2-1.7,1.7L16.5,32.1c-0.5,0.5-1.2,0.5-1.7,0l-2.3-2.3
                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-0.5-1.2,0-1.7l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7L31.7,0.8c0.5-0.5,1.2-0.5,1.7,0
                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L39.7,7.1z"/>
            </g>
            <g>
                <path d="M33.4,49c-0.5,0.5-1.2,0.5-1.7,0L20.9,38.2c-0.5-0.5-1.2-1.2-1.7-1.7L8.4,25.7c-0.5-0.5-0.5-1.2,0-1.7l2.3-2.3
                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,1.2-0.5,1.7,0l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,0.5,1.2,0,1.7
                    L37.4,45c-0.5,0.5-1.2,1.2-1.7,1.7L33.4,49z"/>
            </g>
          </svg>
          </div>
          <div class="datepicker__calendar__nav__header">
            {{ currentMonth }} {{ currentYear }}
          </div>
          <div
            class="datepicker__calendar__nav__arrow"
            (click)="onArrowRightClick()"
          >
            <svg class="datepicker__calendar__nav__chevron" x="0px" y="0px" viewBox="0 0 50 50">
              <g>
                <path d="M8.4,7.1c-0.5,0.5-0.5,1.2,0,1.7l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,1.2,0.5,1.7,0l2.3-2.3
                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,0.5-1.2,0-1.7L29,13.2c-0.5-0.5-1.2-1.2-1.7-1.7L16.5,0.8c-0.5-0.5-1.2-0.5-1.7,0
                    l-2.3,2.3c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,7.1z"/>
              </g>
              <g>
                <path d="M14.8,49c0.5,0.5,1.2,0.5,1.7,0l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7l10.8-10.8c0.5-0.5,0.5-1.2,0-1.7l-2.3-2.3
                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-1.2-0.5-1.7,0L20.9,28.5c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,40.9c-0.5,0.5-0.5,1.2,0,1.7
                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L14.8,49z"/>
              </g>
            </svg>
          </div>
        </div>
        <div
          class="datepicker__calendar__content"
        >
          <div
            class="datepicker__calendar__label"
            *ngFor="let day of dayNames"
          >
            {{ day }} 
          </div>
          <div
            [@calendarAnimation]="animate"
            class="datepicker__calendar__month"
          >
            <div
              *ngFor="let day of calendarDays"
              class="datepicker__calendar__month__day"
              [ngStyle]="{'cursor': isForbbiddenDay(day,'left') ? 'not-allowed': 'pointer',
                          'background-color': getDayBackgroundColor(day,'left'),
                          'color': isHoveredDay(day,'left') ? accentColor : getDayFontColor(day,'left'),
                          'pointer-events': isForbbiddenDay(day,'left') ? 'none' : ''
                          }"
              (click)="onSelectDay(day)"
              (mouseenter)="hoveredDay = day"
              (mouseleave)="hoveredDay = null"
            >
              <span *ngIf="day != 0">
                {{ day.getDate()}}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!--右侧-->
      <div
        class="datepicker__calendar is_right"
        *ngIf="showCalendarRight"
      >
        <div class="datepicker__calendar__nav">
          <div
            class="datepicker__calendar__nav__arrow"
            (click)="onArrowLeftClick()"
          >
          <svg class="datepicker__calendar__nav__chevron" x="0px" y="0px" viewBox="0 0 50 50">
            <g>
                <path d="M39.7,7.1c0.5,0.5,0.5,1.2,0,1.7L29,19.6c-0.5,0.5-1.2,1.2-1.7,1.7L16.5,32.1c-0.5,0.5-1.2,0.5-1.7,0l-2.3-2.3
                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-0.5-1.2,0-1.7l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7L31.7,0.8c0.5-0.5,1.2-0.5,1.7,0
                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L39.7,7.1z"/>
            </g>
            <g>
                <path d="M33.4,49c-0.5,0.5-1.2,0.5-1.7,0L20.9,38.2c-0.5-0.5-1.2-1.2-1.7-1.7L8.4,25.7c-0.5-0.5-0.5-1.2,0-1.7l2.3-2.3
                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,1.2-0.5,1.7,0l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,0.5,1.2,0,1.7
                    L37.4,45c-0.5,0.5-1.2,1.2-1.7,1.7L33.4,49z"/>
            </g>
          </svg>
          </div>
          <div class="datepicker__calendar__nav__header">
            {{ currentMonth }} {{ currentYear }}
          </div>
          <div
            class="datepicker__calendar__nav__arrow"
            (click)="onArrowRightClick()"
          >
            <svg class="datepicker__calendar__nav__chevron" x="0px" y="0px" viewBox="0 0 50 50">
              <g>
                <path d="M8.4,7.1c-0.5,0.5-0.5,1.2,0,1.7l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,1.2,0.5,1.7,0l2.3-2.3
                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,0.5-1.2,0-1.7L29,13.2c-0.5-0.5-1.2-1.2-1.7-1.7L16.5,0.8c-0.5-0.5-1.2-0.5-1.7,0
                    l-2.3,2.3c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,7.1z"/>
              </g>
              <g>
                <path d="M14.8,49c0.5,0.5,1.2,0.5,1.7,0l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7l10.8-10.8c0.5-0.5,0.5-1.2,0-1.7l-2.3-2.3
                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-1.2-0.5-1.7,0L20.9,28.5c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,40.9c-0.5,0.5-0.5,1.2,0,1.7
                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L14.8,49z"/>
              </g>
            </svg>
          </div>
        </div>
        <div
          class="datepicker__calendar__content"
        >
          <div
            class="datepicker__calendar__label"
            *ngFor="let day of dayNames"
          >
            {{ day }}
          </div>
          <div
            [@calendarAnimation]="animate"
            class="datepicker__calendar__month"
          >
            <div
              *ngFor="let day of calendarDays"
              class="datepicker__calendar__month__day"
              [ngStyle]="{'cursor': isForbbiddenDay(day,'right') ? 'not-allowed': 'pointer',
                          'background-color': getDayBackgroundColor(day,'right'),
                          'color': isHoveredDay(day,'right') ? accentColor : getDayFontColor(day,'right'),
                          'pointer-events': isForbbiddenDay(day,'right') ? 'none' : ''
                          }"
              (click)="onSelectRightDay(day)"
              (mouseenter)="hoveredDay = day"
              (mouseleave)="hoveredDay = null"
            >
              <span *ngIf="day != 0">
                {{ day.getDate() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})
export class DatepickerComponent implements OnInit, OnChanges {

    private dateVal: Date;
    private endVal: Date;
    private dateRightVal: Date;

    // two way bindings
    @Output() dateChange = new EventEmitter<Date>();
    @Output() dateRightChange = new EventEmitter<Date>();

    @Input() get date(): Date {
        return this.dateVal;
    };

    set date(val: Date) {
        this.dateVal = val;
        this.dateChange.emit(val);
    }

    @Input() get dateRight(): Date {
        return this.dateRightVal
    }

    set dateRight(val: Date) {
        this.dateRightVal = val;
        this.dateRightChange.emit(val)
    }

    @Input() get enddate(): Date {
        return this.endVal;
    };

    set enddate(val: Date) {
        this.endVal = val;
        //this.dateChange.emit(val);
    }

    // api bindings
    @Input() disabled: boolean;
    @Input() accentColor: string;
    @Input() altInputStyle: boolean;
    @Input() dateFormat: string;
    @Input() fontFamily: string;
    @Input() rangeStart: Date;
    @Input() rangeEnd: Date;
    // data
    @Input() placeholder: string = 'Select a date';
    @Input() inputText: string;
    @Input() inputTexts: string;
    @Input() endText: string;
    // view logic
    @Input() showCalendarLeft: boolean;
    @Input() showCalendarRight: boolean;
    @Input() rangeMonth: number

    // events
    @Output() onSelect = new EventEmitter<Date>();
    // time
    @Input() calendarDays: Array<number>;
    @Input() currentMonth: string;
    @Input() dayNames: Array<String>;
    @Input() hoveredDay: Date;
    calendar: Calendar;
    currentMonthNumber: number;
    currentYear: number;
    months: Array<string>;
    // animation
    animate: string;
    // colors
    colors: {[id: string]: string};
    // listeners
    clickListener: Function;
    rightDay: number;
    leftDay: number


    constructor(private renderer: Renderer, private elementRef: ElementRef) {
        this.dateFormat = 'YYYY-MM-DD';
        // view logic
        this.showCalendarRight = false;
        this.showCalendarLeft = false;

        // colors
        this.colors = {
            'black': '#333333',
            'blue': '#4488FF',
            'lightGrey': '#f1f1f1',
            'white': '#ffffff',
            'grey': '#ddd'
        };
        this.accentColor = this.colors['blue'];
        this.altInputStyle = false;
        // time
        this.calendar = new Calendar();
        this.dayNames = ['六', '一', '二', '三', '四', '五', '日'];
        this.months = [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月',
            '8月', '9月', '10月', '11月', '12月'
        ];
        // listeners
        this.clickListener = renderer.listenGlobal('document', 'click', (event: MouseEvent) => this.handleGlobalClick(event));
    }

    ngOnInit() {
        this.setDate();
        this.setRightDate()
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if ((changes['date'] || changes['dateFormat'])) {
            this.setDate();
            this.setRightDate()
            this.rightDay = this.dateRight.getDate() || new Date().getDate()
            this.leftDay = this.date.getDate() || new Date().getDate()
        }
    }

    ngOnDestroy() {
        this.clickListener();
    }

    // State Management
    // ------------------------------------------------------------------------------------
    closeCalendar(): void {
        // 左侧
        this.showCalendarLeft = false;
        this.setDate();
        // 右侧
        // this.showCalendarRight = false;
        this.setRightDate()
    }

    private setCurrentValues(date: Date, rang: String) {
        if (rang == 'start') {
            this.currentMonthNumber = date.getMonth();
            this.currentMonth = this.months[this.currentMonthNumber];
            this.currentYear = date.getFullYear();
            const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
            this.calendarDays = [].concat.apply([], calendarArray);
        }
        else if (rang == 'end') {
            this.currentMonthNumber = date.getMonth();
            this.currentMonth = this.months[this.currentMonthNumber];
            this.currentYear = date.getFullYear();
            const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
            this.calendarDays = [].concat.apply([], calendarArray);
        }
    }

    setDate(): void {
        if (this.date) {
            this.setInputText(this.date, 'start');
            this.setCurrentValues(this.date, 'start');
        }
        else {
            this.inputText = '';
            this.setCurrentValues(new Date(), 'start');
        }
    }

    setRightDate(): void {
        if (this.dateRight) {
            this.setInputText(this.dateRight, 'end');
            this.setCurrentValues(this.dateRight, 'end')
        }
        else {
            this.inputTexts = '';
            this.setCurrentValues(new Date(), 'end');
        }
    }

    setCurrentMonth(monthNumber: number) {
        this.currentMonth = this.months[monthNumber];
        const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
        this.calendarDays = [].concat.apply([], calendarArray);
    }

    setHoveredDay(day: Date): void {
        this.hoveredDay = day;
    }

    removeHoveredDay(day: Date): void {
        this.hoveredDay = null;
    }

    setInputText(date: Date, range: string): void {
        if (range == 'start') {
            let month: string = (date.getMonth() + 1).toString();
            if (month.length < 2) {
                month = `0${month}`;
            }
            let day: string = (date.getDate()).toString();
            if (day.length < 2) {
                day = `0${day}`;
            }

            let inputText: string;
            switch (this.dateFormat.toUpperCase()) {
                case 'YYYY-MM-DD':
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
                case 'MM-DD-YYYY':
                    inputText = `${month}/${day}/${date.getFullYear()}`;
                    break;
                case 'DD-MM-YYYY':
                    inputText = `${day}/${month}/${date.getFullYear()}`;
                    break;
                default:
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
            }
            this.inputText = inputText;
        }
        else if (range == 'end') {
            // 下月
            let month: string = (date.getMonth() + 1).toString();
            if (month.length < 2) {
                month = `0${month}`;
            }
            let day: string = (date.getDate()).toString();
            if (day.length < 2) {
                day = `0${day}`;
            }
            let inputText: string;
            switch (this.dateFormat.toUpperCase()) {
                case 'YYYY-MM-DD':
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
                case 'MM-DD-YYYY':
                    inputText = `${month}/${day}/${date.getFullYear()}`;
                    break;
                case 'DD-MM-YYYY':
                    inputText = `${day}/${month}/${date.getFullYear()}`;
                    break;
                default:
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
            }
            this.inputTexts = inputText;
        }


    }

    // Click Handlers
    // ------------------------------------------------------------------------------------
    onArrowLeftClick(): void {
        const currentMonth: number = this.currentMonthNumber;
        let newYear: number = this.currentYear;
        let newMonth: number;

        if (currentMonth === 0) {
            newYear = this.currentYear - 1;
            newMonth = 11;
        } else {
            newMonth = currentMonth - 1;
        }

        let newDate = new Date(newYear, newMonth);
        if (!this.rangeStart || newDate.getTime() >= this.rangeStart.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('left');
        }
    }

    onArrowRightClick(): void {
        const currentMonth: number = this.currentMonthNumber;
        let newYear: number = this.currentYear;
        let newMonth: number;

        if (currentMonth === 11) {
            newYear = this.currentYear + 1;
            newMonth = 0;
        } else {
            newMonth = currentMonth + 1;
        }

        let newDate = new Date(newYear, newMonth);
        if (!this.rangeEnd || newDate.getTime() <= this.rangeEnd.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('right');
        }
    }

    onCancel(): void {
        this.closeCalendar();
    }

    onInputLeftClick(): void {
        this.showCalendarLeft = !this.showCalendarLeft;
        this.showCalendarRight = false;
        this.setDate();
    }

    onInputRightClick(): void {
        this.showCalendarRight = !this.showCalendarRight;
        this.showCalendarLeft = false;
        this.setRightDate()
    }

    onSelectDay(day: Date): void {
        this.date = day;
        this.onSelect.emit(day);
        // 点击后关闭选择框
        this.showCalendarLeft = !this.showCalendarLeft;
        this.showCalendarRight = true
        this.setDate();
        this.setRightDate()
    }

    onSelectRightDay(day): void {
        if (day == 0) {
            return
        }
        else {
            this.dateRight = day;
            this.showCalendarRight = !this.showCalendarRight;
        }

    }

    // Listeners
    // ------------------------------------------------------------------------------------
    handleGlobalClick(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeCalendar();
        }
    }

    // Helpers
    // ------------------------------------------------------------------------------------
    getDayBackgroundColor(day: Date, rang: string): string {
        let color = this.colors['white'];
        if (this.isChosenDay(day, rang)) {
            color = this.accentColor;
        } else if (this.isCurrentDay(day)) {
            color = this.colors['lightGrey'];
        }
        // else if (this.isForbbiddenDay(day, rang)) {
        //     color = this.colors['grey']
        // }
        return color;
    }

    isForbbiddenDay(day, rang) {
        let now = new Date()
        if (rang == 'left') {
            let today = new Date().getTime();
            if (day && day !== 0) {
                if (day.getTime() > today || day.getTime() > this.dateRight.getTime() || day.getTime() < (today - this.rangeMonth * 30 * 86400000)) {
                    return true
                }
            }
            else {
                return false
            }
        }
        else if (rang == 'right') {
            if (day && day !== 0) {
                if (day.getTime() > now.getTime() || day.getTime() < this.date.getTime()) {
                    return true
                }
            }
            else {
                return false
            }
        }

    }

    getDayFontColor(day: Date, rang: string): string {
        let color = this.colors['black'];
        if (this.isChosenDay(day, rang)) {
            color = this.colors['white'];
        }
        if (this.isForbbiddenDay(day, rang)) {
            color = this.colors['grey']
        }
        return color;
    }

    isChosenDay(day: Date, rang: string): boolean {
        if (day && rang == 'left') {
            return this.date ? day.toDateString() == this.date.toDateString() : false;
        } else if (day && rang == 'right') {
            return this.dateRight ? day.toDateString() == this.dateRight.toDateString() : false;
        }
        else {
            return false
        }
    }

    isCurrentDay(day: Date): boolean {
        if (day) {
            return day.toDateString() == new Date().toDateString();
        } else {
            return false;
        }
    }

    isHoveredDay(day: Date, rang: string): boolean {
        return this.hoveredDay ? this.hoveredDay == day && !this.isChosenDay(day, rang) : false;
    }

    triggerAnimation(direction: string): void {
        this.animate = direction;
        setTimeout(() => this.animate = 'reset', 185);
    }
}
