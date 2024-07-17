import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'adx-state-layer',
  standalone: true,
  imports: [],
  templateUrl: './state-layer.component.html',
  styleUrls: ['./state-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateLayerComponent {}