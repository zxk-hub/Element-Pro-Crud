export const basicComponents = [
  {
    type: 'button',
    name: '按钮',
    icon: 'mouse-pointer',
    labelWidth: '',
    hidden: false,
    options: {
      text: '确认',
      btnCommand: 'btnCallback',
    },
  },
  {
    type: 'text',
    name: '文本',
    icon: 'language',
    options: {
      defaultValue: '',
      remoteFunc: '',
      align: 'center',
      fontSize: '16px',
    },
  },
  {
    type: 'input',
    name: '单行文本',
    labelWidth: '',
    hidden: false,
    icon: 'regular/keyboard',
    options: {
      width: '100%',
      defaultValue: '',
      readonly: false,
      disabled: false,
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
    },
  },
  {
    type: 'textarea',
    name: '多行文本',
    icon: 'regular/keyboard',
    labelWidth: '',
    hidden: false,
    options: {
      width: '100%',
      defaultValue: '',
      readonly: false,
      disabled: false,
      required: false,
      pattern: '',
      placeholder: '',
    },
  },
  {
    type: 'number',
    name: '计数器',
    icon: 'sort-numeric-up',
    labelWidth: '',
    hidden: false,
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: '',
    },
  },
  {
    type: 'radio',
    name: '单选框组',
    icon: 'regular/dot-circle',
    labelWidth: '',
    hidden: false,
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [
        {
          value: '选项1',
          label: '选项1',
        },
        {
          value: '选项2',
          label: '选项2',
        },
        {
          value: '选项3',
          label: '选项3',
        },
      ],
      required: false,
      disabled: false,

      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
      },
      remoteFunc: '',
    },
  },
  {
    type: 'checkbox',
    name: '多选框组',
    icon: 'regular/check-square',
    labelWidth: '',
    hidden: false,
    options: {
      inline: true,
      buttonStyle: false,
      defaultValue: [],
      showLabel: false,
      disabled: false,
      min: null,
      max: null,
      options: [
        {
          value: '选项1',
        },
        {
          value: '选项2',
        },
        {
          value: '选项3',
        },
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
      },
      remoteFunc: '',
    },
  },
  {
    type: 'date',
    name: '日期选择器',
    labelWidth: '',
    hidden: false,
    icon: 'regular/calendar-alt',
    options: {
      defaultValue: false,
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: '',
    },
  },
  {
    type: 'date',
    name: '时间选择器',
    labelWidth: '',
    hidden: false,
    icon: 'clock',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'datetime',
      format: 'yyyy-MM-dd hh:mm:ss',
      timestamp: false,
      required: false,
      width: '',
    },
  },
  {
    type: 'rate',
    name: '评分',
    icon: 'regular/star',
    labelWidth: '',
    hidden: false,
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,
    },
  },
  {
    type: 'color',
    name: '颜色选择器',
    icon: 'palette',
    labelWidth: '',
    hidden: false,
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,
    },
  },
  {
    type: 'select',
    name: '下拉选择框',
    labelWidth: '',
    hidden: false,
    icon: 'regular/caret-square-down',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: '',
      required: false,
      showLabel: false,
      allowCreate: false,
      width: '',
      options: [
        {
          value: '下拉框1',
        },
        {
          value: '下拉框2',
        }, {
          value: '下拉框3',
        },
      ],
      remote: 'dict',
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
      },
      remoteFunc: '',
    },
  },
  {
    type: 'switch',
    name: '开关',
    labelWidth: '',
    hidden: false,
    icon: 'toggle-off',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
    },
  },
  {
    type: 'slider',
    name: '滑块',
    icon: 'sliders-h',
    labelWidth: '',
    hidden: false,
    options: {
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: '',
    },
  },

];

export const advanceComponents = [
  {
    type: 'blank',
    name: '自定义',
    icon: 'chalkboard',
    options: {
      defaultType: 'String',
    },
  },
  {
    type: 'upload',
    name: '附件',
    icon: 'upload',
    options: {
      resourceId: 'id',
      fileType: '',
      defaultValue: '',
      remoteFunc: '',
      readonly: false,
    },
  },
  {
    type: 'cascader',
    name: '级联选择器',
    icon: 'random',
    options: {
      defaultValue: [],
      width: '',
      separator: '/',
      placeholder: '',
      multiple: false,
      disabled: false,
      clearable: false,
      checkStrictly: false,
      remote: 'dict',
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children',
      },
      remoteFunc: '',
    },
  },
  {
    type: 'table',
    name: '表格',
    icon: 'table',
    options: {
      remoteFunc: '',
      visibleList: {
        actionColumnBtnEdit: true,
        actionColumnBtnDetail: false,
        btnAdd: true,
        actionColumn: true,
        tableTitle: false,
        searchForm: false,
        actionColumnBtnDel: true,
        conditionTitle: false,
        btnExport: false,
        btnImport: false,
      },
      tableParams: '',
      prefill: '',
      tableTitle: '',
      showPagination: true,
      isMultiple: false,
      tableName: '',
      tableDesignerName: '',
      dialogFormDesignerName: '',
    },
  },
  // 目前暂时提供了几个常用props,有更多需要自行拓展
  // 官网:https://vue-treeselect.js.org
  {
    type: 'treeselect',
    name: '树形下拉框',
    icon: 'tree',
    options: {
      remoteFunc: '',
      placeholder: '',
      width: '',
      maxHeight: 300,
      multiple: false,
      remote: 'custom',
      appendToBody: false,
      props: {
        value: 'value',
        label: 'label',
        children: 'children',
      },
      clearable: true,
      searchable: true,
      noChildrenText: '暂无数据',
      noOptionsText: '暂无数据',
      noResultsText: '暂无数据',
      searchNested: true,
      required: false,
      showValueLabelSlot: false,
      disabled: false,
      showCount: false,
      disableBranchNodes: true,
      remoteOptions: [],
    },
  },
  {
    type: 'richtext',
    name: '富文本',
    icon: 'text-width',
    hidden: false,
    options: {
      defaultValue: '',
      readonly: false,
    },
  },
];

export const layoutComponents = [
  {
    type: 'grid',
    name: '栅格布局(2列)',
    icon: 'th',
    columns: [
      {
        span: 12,
        list: [],
      },
      {
        span: 12,
        list: [],
      },
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top',
    },
  },
  {
    type: 'grid',
    name: '栅格布局(1列)',
    icon: 'th',
    columns: [
      {
        span: 24,
        list: [],
      },
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top',
    },
  },
];
