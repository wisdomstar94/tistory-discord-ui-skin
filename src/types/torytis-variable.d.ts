/// <reference types="react" />

/**
 * 주의! 본 파일에 커스텀 내용을 추가할 경우 해당 내용은 torytis 특정 명령어 구동시에 유실 될 수 있습니다.
 */
declare namespace JSX {
  interface IntrinsicElements {
		's_if_var_list_display_type': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		's_not_var_list_display_type': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		's_if_var_list_grid_max_col_count': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		's_not_var_list_grid_max_col_count': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
	}
}
