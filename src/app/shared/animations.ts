import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('SignUpPage => LoginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
        })
      ]),
      query(':enter', [
        style({transform:'scale(1) translateY(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out',
        style({transform:'scale(1) translateY(-100%)'}))
        ]),
        query(':enter', [
          animate('300ms ease-in',
          style({transform:'scale(1) translateY(0)'}))
        ]),
      ]),
    ]),
    transition('LoginPage => SignUpPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          top:0,
        })
      ]),
      query(':enter', [
        style({transform:'scale(1) translateY(-100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-in',
          style({transform:'translateY(100%)'}))
        ]),
        query(':enter', [
          animate('300ms ease-in',
          style({transform:'scale(1) translateY(0)'}))
        ]),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ],{optional:true}),
      query(':enter', [
        style({ right: '-100%' })
      ],{optional:true}),
      query(':leave', animateChild(),{optional:true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ right: '100%', opacity: 0 }))
        ],{optional:true}),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ],{optional:true}),
        query('@*', animateChild(),{optional:true})
      ]),
    ])
  ]);
