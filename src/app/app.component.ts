import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dynamic-charts';

  selectedChartType!: string;
  chartTypes: string[] = ['bar-vertical', 'pie-chart'];
  charts: any[] = [];
  selectedDataset: any;
  datasets: any[] = [
    {
      name: 'Produtos',
      values: [
        { name: 'Produto A', value: 100 },
        { name: 'Produto B', value: 200 },
        { name: 'Produto C', value: 50 },
        { name: 'Produto D', value: 150 },
      ],
    },
    {
      name: 'Vendas',
      values: [
        { name: 'Janeiro', value: 150 },
        { name: 'Fevereiro', value: 230 },
        { name: 'Março', value: 120 },
        { name: 'Abril', value: 175 },
      ],
    },
    {
      name: 'Categorias',
      values: [
        { name: 'Eletrônicos', value: 300 },
        { name: 'Roupas', value: 250 },
        { name: 'Acessórios', value: 150 },
      ],
    },
  ];

  addChart() {
    if (this.selectedChartType && this.selectedDataset) {
      this.charts.push({
        type: this.selectedChartType,
        data: this.selectedDataset.values
      });
    }
  }

  removeChart(index: number) {
    this.charts.splice(index, 1);
  }
}
